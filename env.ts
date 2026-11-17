import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().max(65535).default(8080),
  APP_ORIGIN: z.string().url().default("http://localhost:8081"),
  TRUST_PROXY: z.enum(["true", "false"]).default("false"),
  FIREBASE_PROJECT_ID: z.string().min(1).optional(),
  FIREBASE_CLIENT_EMAIL: z.string().email().optional(),
  FIREBASE_PRIVATE_KEY: z.string().min(1).optional(),
  OWNER_FIREBASE_UID: z.string().min(1).optional(),
  OPENAI_API_KEY: z.string().min(1).optional(),
  OPENAI_MODEL: z.string().min(1).default("gpt-4o-mini"),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
});

const parsed = schema.refine(value => Boolean(value.UPSTASH_REDIS_REST_URL) === Boolean(value.UPSTASH_REDIS_REST_TOKEN), {
  message: "Configure URL e token do Upstash Redis em conjunto.",
}).safeParse(process.env);

if (!parsed.success) {
  // Do not print environment values; validation errors may contain sensitive input.
  throw new Error("Configuração do servidor inválida. Verifique os nomes e formatos das variáveis de ambiente.");
}

export const env = parsed.data;
