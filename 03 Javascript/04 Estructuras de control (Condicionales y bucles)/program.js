let size = 10;
let y = 1;
let row = ""; // Crear una cadena para almacenar la fila
while (y <= size) {
  let x = 1;
  while (x <= size) {
    if (x === 1 || x === size || y === 1 || y === size)
      row += "*"; //esta linea de còdigo es igual a --> row = row + '*';
    else row += "_";
    x++;
  }
  row += "\n"; // Agregar un salto de línea al final de la fila
  y++;
}
console.log(row);
