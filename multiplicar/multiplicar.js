// Importamos el paquete fs, para grabar la tabla en un archivo de texto
const fs = require('fs');

const colors = require('colors');

// Funcion para listar o mostar una tabla
let listarTabla = ( base, limite = 10 ) => {

	console.log(`==================`.blue);
	console.log(`Tabla de ${ base }`.blue);
	console.log(`==================`.blue);	

	for (let i = 1; i <= limite; i++) {
			
			console.log( `${ base } * ${ i } = ${ base * i }` );

	}

}

// Funcion para crear el archivo con la tabla solicitada
let crearArchivo = ( base, limite = 10 ) => {

	return new Promise( ( resolve, reject  ) => {

		if ( ! Number( base ) ) {

			reject ( `EL valor introducido ${ base } no es un numero` );
			return;

		}

		let data = '';

		for (let i = 1; i <= limite; i++) {
			
			data += `${ base } * ${ i } = ${ base * i }\n`;

		}

		// Grabamnos en archivo de texto
		fs.writeFile( `tablas/tabla-${ base }.txt`, data, ( err ) => {

			if ( err ) 
				reject ( err )
			else
				resolve ( `tabla-${ base }.txt` );

		});

	});

}

// Exportamos este archivo
module.exports = {
	crearArchivo,
	listarTabla
}