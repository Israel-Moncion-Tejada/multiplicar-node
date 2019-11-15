// Creando la variable de opciones en yargs
const opts = {
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
};

// type { number, string, boolean }
// Cargando el modulo del yargs
const argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};