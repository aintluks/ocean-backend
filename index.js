const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");

(async () => {
  const url = "mongodb://localhost:27017";
  const dbname = "ocean_bancodados_09_07_2021";

  console.log("Conectando ao banco de dados...");

  // const client = await MongoClient.connect(url, { useUnifiedTopology: true });

  console.log("MongoDB conectado com sucesso!");

  // const db = client.db(dbname);
  // const games = db.collection("games");
  const games = undefined;

  app.get("/", (req, res) => {
    return res.send("He ll o");
  });

  app.get("/games", async (req, res) => {
    const gameList = await games.find().toArray();

    return res.send(gameList);
  https://aintluks-ocean-backend.herokuapp.com/
});

  app.get("/games/:id", async (req, res) => {
    const id = req.params.id;

    const game = await games.findOne({ _id: ObjectID(id) });

    return res.send(game);
  });

  app.post("/games", async (req, res) => {
    const game = req.body;

    await games.insertOne(game);

    return res.send(game);
  });

  app.put("/games/:id", async (req, res) => {
    const id = req.params.id;
    const game = req.body;

    await games.updateOne({ _id: ObjectID(id) }, { $set: game });

    return res.send(game);
  });

  app.delete("/games/:id", async (req, res) => {
    const id = req.params.id;

    await games.deleteOne({ _id: ObjectID(id) });

    return res.send("Game removed...");
  });
})();

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000);
