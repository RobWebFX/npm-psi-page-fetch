/**
 * @see https://github.com/GoogleChromeLabs/psi
 */


import logger from './helpers/logger.mjs'
import pageToFetch from './helpers/pageToFetch.mjs'
import displayResults from './helpers/displayResults.mjs'
import dotenv from 'dotenv'


( async () => {

	// grabs Google API key from .env
	dotenv.config()

	const urlArgs = process.argv.slice( 2 )

	if( !urlArgs.length ) {
		logger.warn( 'Pass target URL as CLI argument (e.g. "npm run fetch webfx.com webfx.com/seo")' )
		return
	}

	const pageFetches = []

	try {
		urlArgs.forEach( urlArg => {

			// add protocol in case only domain is passed
			if( 0 !== urlArg.indexOf( 'https://' ) && 0 !== urlArg.indexOf( 'http://' ) ) {
				urlArg = `https://${urlArg}`
			}

			// includes URL validation
			const urlObj = new URL( urlArg )

			pageFetches.push( pageToFetch( urlObj.toString() ) )
		})

		Promise.all( pageFetches )
			.then( results => displayResults( results ) )
			.finally( () => logger.done() )

	} catch( err ) {
		logger.error( err )
	}
	
}) ()
