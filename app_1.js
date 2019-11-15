/**
 *  ================================
 *    CREACION DE UNA CALCULADORA
 *  ================================
 */

// type { number, string, boolean }

// Cargando el modulo del yargs
const argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            type: 'number',
            demand: true,
            alias: 'b',
            description: "Tabla base a multiplicar."
        },
        limite: {
            type: 'number',
            alias: 'l',
            default: 10,
            description: "Limite para la multiplicacion."
        }
    })
    .help()
    .argv;

//  Destructuracion --JavaScript--
const { crearArchivo } = require('.\\multiplicar\\multiplicar')

// DECLARANDO LA BASE.
// let base = '9';


//  Se coloca argv[2] porque el 0 y 1 ya esta ocupado
//
// 'C:\\Program Files\\nodejs\\node.exe',
// 'D:\\nodejs\\03-Bases\\app',
// 
//  Con esta configuracion los parametros deben de ser pasados desde la linea de comandos.
// 

// =====================================
// SUSTITUIDAS POR EL USO DE YARGS
// =====================================
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
let comando = argv._[0];
console.log(comando);
// console.log(argv);
// console.log(argv.base);

// Imprime la lista de argumentos que se le pasa desde la linea de comandos
// (process.argv);
// Usando la funcion crear archivo.
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));