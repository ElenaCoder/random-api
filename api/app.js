import { Hono } from "./deps.js";

const app = new Hono();

app.get("/api/random", (c) => c.json({
  random: Math.random()
}));

export default app;