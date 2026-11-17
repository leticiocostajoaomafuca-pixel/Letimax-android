import { Redis } from "@upstash/redis";
import { env } from "../config/env";

let client: Redis | null = null;

export function getRedis(): Redis {
  if (!env.UPSTASH_REDIS_REST_URL || !env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Upstash Redis não está configurado.");
  }
  if (!client) {
    client = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return client;
}

export function isRedisConfigured(): boolean {
  return Boolean(env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN);
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  return getRedis().get<T>(key);
}

export async function cacheSet(key: string, value: unknown, ttlSeconds = 30): Promise<void> {
  await getRedis().set(key, value, { ex: ttlSeconds });
}

export async function cacheDelete(key: string): Promise<void> {
  await getRedis().del(key);
}
