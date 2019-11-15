// Usando la APIS FS
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "=> ${ base } <=" no es un numero`);
            return
        };

        let data = '';

        console.log('===================='.green);
        console.log(`  Tabla de ${ base }`.green);
        console.log('===================='.green);

        // Bucle for para la creacion de una calculadora.
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`);
        };
    })
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "=> ${ base } <=" no es un numero`);
            return;
        }

        let data = '';

        // Bucle for para la creacion de una calculadora.
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        };

        // cada tabla sera creada en el directorio tablas
        // el path debe ser especificado en windows con "\\" backslash.
        fs.writeFile(`tablas\\tabla-${ base }-al-${ limite }.txt`, data, 'utf8', (err) => {
            if (err) {
                reject(`Error: ${ err }`)
            } else {
                // "PROMESA" Retorna el mensaje de que el archivo ha sido creado.
                // console.log("Archivo creado:", `tabla-${ base }-al-${ limite }.txt`.yellow);
                console.log("Archivo creado:", colors.blue(`tabla-${ base }-al-${ limite }.txt`));
            }
        });
    });
};


// Exportando las funciones.
module.exports = {
    crearArchivo,
    listarTabla
};