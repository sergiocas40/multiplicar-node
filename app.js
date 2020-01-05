/*
* bases node
*/

const colors = require('colors');

// Exportamos argv desde el archivo yargs.js
const argv = require('./config/yargs.js').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[ 0 ];

switch ( comando ) {

	case 'listar':
		listarTabla( argv.base, argv.limite );
		break;

	case 'crear':
		crearArchivo( argv.base, argv.limite )
			.then( archivo => console.log( `Archivo creado: ${ archivo.blue }` ) )
			.catch( e => console.log( e ) );
		break;

	default:

}

// console.log( 'Limite', argv.limite);
// console.log( 'base', argv.base);

// let argv = process.argv;
// let parametro = argv[ 2 ];
// let base = parametro.split( '=' )[1];

