const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// simple fake database (for now)
let items = [];

// GET route
app.get("/items", (req, res) => {
  res.json(items);
});

// POST route
app.post("/items", (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name };
  items.push(newItem);
  res.json(newItem);
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});