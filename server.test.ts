import assert from "node:assert/strict";
import { test } from "node:test";
import request from "supertest";
import { app } from "../index";

test("GET /api/health returns the service status", async () => {
  const response = await request(app).get("/api/health/");

  assert.equal(response.status, 200);
  assert.equal(response.body.ok, true);
  assert.equal(response.body.service, "letimax-server");
  assert.equal(response.body.status, "online");
  assert.equal(Number.isNaN(Date.parse(response.body.timestamp)), false);
});

test("unknown API routes return a controlled 404", async () => {
  const response = await request(app).get("/api/route-that-does-not-exist");

  assert.equal(response.status, 404);
  assert.equal(response.body.error, "Rota não encontrada.");
});

test("the root endpoint identifies the backend without exposing configuration", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.equal(response.body.service, "LétimaX Server");
  assert.equal("env" in response.body, false);
  assert.equal("credentials" in response.body, false);
});


test("POST /api/chat requires owner authentication", async () => {
  const response = await request(app)
    .post("/api/chat")
    .send({ mensagem: "Olá, LétimaX" });

  assert.equal(response.status, 401);
  assert.equal(response.body.error, "Autenticação necessária.");
});

test("POST /api/chat rejects a missing bearer token before calling Firebase", async () => {
  const response = await request(app)
    .post("/api/chat")
    .set("Authorization", "Bearer ")
    .send({ mensagem: "Olá" });

  assert.equal(response.status, 401);
  assert.equal(response.body.error, "Autenticação necessária.");
});
