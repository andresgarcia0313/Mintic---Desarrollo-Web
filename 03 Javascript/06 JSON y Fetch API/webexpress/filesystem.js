const fs = require("fs").promises;
const filePath = "./archivos/archivo.txt";
async function readFile() {
  const data = await fs.readFile(filePath, "utf8");
  console.log("\tContenido del archivo:\n", data);
}
readFile();
