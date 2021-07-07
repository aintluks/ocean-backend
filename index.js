const express = require("express");
const app = express();

app.use(express.json());

const lista = [
  "League of Legends",
  "Overwatch",
  "Teamfight Tactics",
  "Valorant",
];

app.get("/games", (req, res) => {
  res.send(lista.filter(Boolean));
});

app.get("/games/:id", (req, res) => {
  const id = req.params.id;

  res.send(lista[id]);
});

app.post("/games", (req, res) => {
  const game = req.body.game;

  lista.push(game);

  res.send(lista);
});

app.put("/games/:id", (req, res) => {
  const id = req.params.id;

  lista[id] = req.body.game;

  res.send(lista[id]);
});

app.delete("/games/:id", (req, res) => {
  const id = req.params.id;

  delete lista[id];

  res.send(lista.filter(Boolean));
});

app.listen(3000);
