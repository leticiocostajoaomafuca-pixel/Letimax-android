import { getRedis } from "./services/redis";
import { getDatabase } from "./services/firestore";

type QueueMessage = { ownerUid: string; id: string };
type Job = {
  id: string;
  ownerUid: string;
  type: "generate_report" | "sync_workspace" | "refresh_analytics";
  description: string;
  status: "queued" | "running" | "completed" | "failed";
  attempts?: number;
  createdAt: string;
  result?: unknown;
  error?: string;
};

const pendingKey = "letimax:jobs:pending:global";
const processingKey = "letimax:jobs:processing:global";
const jobKey = (uid: string, id: string) => "letimax:jobs:item:" + uid + ":" + id;
const MAX_ATTEMPTS = 3;

async function runJob(job: Job): Promise<unknown> {
  const snapshot = await getDatabase()
    .collection("owners")
    .doc(job.ownerUid)
    .collection("workspace")
    .limit(500)
    .get();

  const records = snapshot.docs.map(doc => doc.data());
  const counts = {
    total: records.length,
    tasks: records.filter(item => item.type === "task").length,
    products: records.filter(item => item.type === "product").length,
    notes: records.filter(item => item.type === "note").length,
    businesses: records.filter(item => item.type === "business").length,
  };

  if (job.type === "sync_workspace") {
    return {
      message: "Ligação ao Firestore confirmada. Esta tarefa ainda não sincroniza dados do telemóvel.",
      checkedAt: new Date().toISOString(),
      recordsChecked: counts.total,
    };
  }

  if (job.type === "refresh_analytics") {
    return { generatedAt: new Date().toISOString(), counts };
  }

  return {
    title: "Relatório do espaço de trabalho LétimaX",
    generatedAt: new Date().toISOString(),
    counts,
  };
}

async function processOne(): Promise<boolean> {
  const redis = getRedis();
  const raw = await redis.lmove<string>(pendingKey, processingKey, "right", "left");
  if (!raw) return false;

  let message: QueueMessage;
  try {
    message = JSON.parse(raw) as QueueMessage;
    if (!message.ownerUid || !message.id) throw new Error("Invalid queue message");
  } catch {
    await redis.lrem(processingKey, 1, raw);
    return true;
  }

  const key = jobKey(message.ownerUid, message.id);
  const job = await redis.get<Job>(key);
  if (!job || job.status === "completed" || job.status === "failed") {
    await redis.lrem(processingKey, 1, raw);
    return true;
  }

  const attempts = (job.attempts ?? 0) + 1;
  await redis.set(key, { ...job, status: "running", attempts }, { ex: 60 * 60 * 24 * 7 });

  try {
    const result = await runJob(job);
    await redis.set(key, {
      ...job,
      status: "completed",
      attempts,
      result,
      completedAt: new Date().toISOString(),
    }, { ex: 60 * 60 * 24 * 7 });
  } catch {
    if (attempts < MAX_ATTEMPTS) {
      await redis.set(key, {
        ...job,
        status: "queued",
        attempts,
        lastError: "Falha temporária ao processar a tarefa.",
      }, { ex: 60 * 60 * 24 * 7 });
      await redis.lpush(pendingKey, raw);
    } else {
      await redis.set(key, {
        ...job,
        status: "failed",
        attempts,
        error: "Número máximo de tentativas atingido.",
      }, { ex: 60 * 60 * 24 * 7 });
    }
  } finally {
    await redis.lrem(processingKey, 1, raw);
  }

  return true;
}

async function recoverInterruptedJobs() {
  const redis = getRedis();
  const stranded = await redis.lrange<string>(processingKey, 0, 499);
  for (const raw of stranded) {
    await redis.lrem(processingKey, 1, raw);
    await redis.lpush(pendingKey, raw);
  }
}

async function main() {
  await recoverInterruptedJobs();
  console.log("LétimaX Worker iniciado.");
  while (true) {
    try {
      const processed = await processOne();
      if (!processed) await new Promise(resolve => setTimeout(resolve, 2500));
    } catch {
      console.error("Worker: falha temporária; nova tentativa em 5 segundos.");
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

void main();
