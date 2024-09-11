const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

async function connectDb() {
  return (
    await MongoClient.connect("mongodb://root:Asde71.4@192.168.1.17:27018/")
  ).db("dbinit");
}

app.get("/", (req, res) => {
  res.send("Hola Mundo 🌍");
});

app.get("/users", async (req, res) => {
  const col = (await connectDb()).collection("user");
  res.json(await col.find().toArray());
});

app.post("/user", async (req, res) => {
  const col = (await connectDb()).collection("user");
  const result = await col.insertOne(req.body);
  res.json(result);
});

// Inicia el servidor
app.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:3000 🚀`);
});
