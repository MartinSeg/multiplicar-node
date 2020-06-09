const options = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    default: 10,
    alias: "l",
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en cosola la tabla de multiplicar", options)
  .command("crear", "Crea el archivo de la tabla de multiplicar", options).argv;

module.exports = {
  argv
};
