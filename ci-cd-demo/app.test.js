const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("🚀 Hello from CI/CD Pipeline with Docker & GitHub Actions!"));

test("GET / should return CI/CD message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toContain("Hello from CI/CD");
});
