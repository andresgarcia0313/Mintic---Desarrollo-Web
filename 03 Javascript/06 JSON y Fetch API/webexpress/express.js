const express = require("express");
const app = express();
const port = 3000;

// Ruta principal donde el navegador nos mostrará un mensaje de "Hola Mundo"
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor  http://localhost:${port}`);
});
