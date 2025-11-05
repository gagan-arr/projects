const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from CI/CD Pipeline with Docker & GitHub Actions!");
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
