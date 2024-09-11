const { MongoClient } = require("mongodb");

async function main() {
  const url = "mongodb://root:Asde71.4@192.168.1.17:27018/";
  const dbName = "dbinit";
  let client;
  try {
    client = await MongoClient.connect(url, {});

    const db = client.db(dbName);
    const collectionUser = db.collection("user");
    // Agregar documentos de ejemplo a insertar en la colección de la base de datos
    const usersToInsert = [
      { name: "Juan Pérez", age: 30, email: "juan.perez@example.com" },
      { name: "Ana García", age: 25, email: "ana.garcia@example.com" },
      { name: "Carlos López", age: 35, email: "carlos.lopez@example.com" },
    ];
    console.log(usersToInsert[2].name);
    await collectionUser.insertMany(usersToInsert); // Insertar documentos en la colección

    const users = await collectionUser.find().toArray(); // Recuperar y mostrar los documentos insertados
    console.log("Usuarios en la base de datos:", users);
  } catch (error) {
    console.error("Error al conectar o recuperar datos 🚨:", error);
  } finally {
    if (client) {
      await client.close();
      console.log("Conexión cerrada 🚪");
    }
  }
}

main();
