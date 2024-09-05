// server.js
const express = require("express");
const app = express();
const port = 3010;

// Datos de ejemplo
const datos = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Desarrollador",
};

// Ruta para obtener datos en formato JSON
app.get("/api/datos", (req, res) => {
  // Mis variables req es la solicitud del cliente y res es la respuesta del servidor
  res.json(datos); //res es la respuesta del servidor y usa el metodo json para enviar los datos en formato json
});
app.get("/", (req, res) => {
  // mostrar una web con hola mundo
  res.send("<h1>Hola Mundo</h1>");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
