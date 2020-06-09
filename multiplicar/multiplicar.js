const fs = require("fs");

let listarTabla = (base, limite) => {
  return new Promise( (resolve, reject) => {

    let tabla = "";
  
    for (let i = 1; i <= limite; i++) {
      tabla += `${base}*${limite}=${base * i}\n`;
    }

    resolve(tabla)
  })

};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      return reject(
        `La base indicada no es un numero, ha introducido '${base}'`
      );
    }

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-del-${base}-hasta-${limite}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-del-${base}-hasta-${limite}.txt`);
      }
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
