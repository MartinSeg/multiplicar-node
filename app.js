const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
let base = argv.b;
let limite = argv.l;

switch (comando) {
  case "listar":
    listarTabla(base, limite)
      .then((res) => console.log(res.yellow));

    break;

  case "crear":
    crearArchivo(base, limite)
      .then((res) => console.log(`Archivo creado: ${res.green}`))
      .catch((err) => console.log(err));

    break;

  default:
    console.log("No hay comando");
    break;
}
