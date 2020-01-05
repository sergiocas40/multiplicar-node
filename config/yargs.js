// Configuramos los comandos con lo cuales el usuario puede interactuar con nuestra aplicacion

// Declaramos los comandos que funcionan para el comando listar y crear
const opts = {

	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}	

}

const argv = require('yargs')
		// Declaramos los comandos que funcionan para el comando listar
		.command( 'listar', 'Imprime en consola la tabla de multiplicar', opts )
		.command(  'crear', 'Genera un archivo con la tabla de multiplicar', opts)
		.help()
		.argv;

module.exports = {
	argv
}