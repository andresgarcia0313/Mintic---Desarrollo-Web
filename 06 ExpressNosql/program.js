const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
app.use(express.json());

const uri = "mongodb://root:Asde71.4@192.168.1.17:27018/";
const dbName = "dbSoftware";
const collectionName = "users";
const endPoint = "/user";
//CRUD Create, Read, Update, Delete
let col;

async function db() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  col = db.collection(collectionName);
}

db().catch(console.error);
app.get("/", async (req, res) => {
  res.send("La api esta ejecutando");
});
app.get(endPoint, async (req, res) => {
  try {
    const documents = await col.find().toArray();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo datos" });
  }
});
app.get(endPoint + "/:name", async (req, res) => {
  try {
    const query = { userName: req.params.name };
    const document = await col.findOne(query);
    res.json(document);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo datos por nombre" });
  }
});
app.get(endPoint + "/role/:rol", async (req, res) => {
  try {
    const query = { role: req.params.rol };
    const documents = await col.find(query).toArray();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo usuarios por rol" });
  }
});

// Crear usuario
app.post(endPoint, async (req, res) => {
  try {
    await col.insertOne(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: "Error creando usuario" });
  }
});

// Actualizar usuario
app.put(endPoint + "/:name", async (req, res) => {
  try {
    const result = await col.updateMany(
      { userName: req.params.name },
      { $set: req.body }
    );
    console.info(result);
    res.json(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error actualizando usuario" });
  }
});

// Eliminar usuario
app.delete(endPoint + "/:name", async (req, res) => {
  try {
    const result = await col.deleteMany({ userName: req.params.name });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error eliminando usuario" });
  }
});

app.listen(3000, () => {
  console.log("Servidor está corriendo en http://localhost:3000");
});
