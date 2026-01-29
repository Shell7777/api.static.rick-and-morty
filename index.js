const express = require("express");
const data = require("./data.json")

const PORT = process.env.PORT || 3003;

try {
  const app = express();


  app.get("/", (_, res) => {
    res.send("🚀 Deploy successfully");
  });

  app.get("/api/person", (_, res) => {
    res.json(data);
  });

  app.get("/api/person/:id", (req, res) => {
    const { id } = req.params;
    const found = data.find((item) => item.id == id);
    if (found) {
      res.json(found);
    } else {
      res.status(404).json({ error: "Person not found" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("Error starting server:", err);
}

