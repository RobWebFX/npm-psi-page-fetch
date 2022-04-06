import colors from '@colors/colors'


const logger = {

	update( msg ) {
		console.info( `${colors.bgBlue( 'UPDATE:' )}`, msg )
	},


	debug( arg ) {
		console.info( `${colors.bgMagenta( 'DEBUG:' )}`, arg )
	},


	warn( msg ) {
		colors.setTheme({
			warn: [
				'bgYellow',
				'black'
			]
		})

		console.warn( `${colors.warn( 'WARNING:' )} ${msg}` )
	},


	error( err ) {
		colors.setTheme({
			error: [
				'bgRed',
				'black'
			]
		})

		console.warn( `${colors.error( 'ERROR:' )} ${err}` )
	},


	done() {
		colors.setTheme({
			done: [
				'brightGreen',
				'bold'
			]
		})

		console.log( colors.done( 'Done!' ) )
	}

}


export default logger