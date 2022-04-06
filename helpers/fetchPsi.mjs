import psi from 'psi'
import logger from './logger.mjs'


const fetchPsi = {

	async desktop( url ) {
		return await this.fetch( url, 'desktop' )
	},


	async mobile( url ) {
		return await this.fetch( url, 'mobile' )
	},	


	async fetch( url, strategy ) {
		logger.update( `Fetching ${strategy} data for "${url}" ...` )

		const { data } = await psi( url, { strategy })

		logger.update( `Received ${strategy} data for "${url}"! Parsing results ...` )

		const audits = data.lighthouseResult.audits

		return {
			Score: 	data.lighthouseResult.categories.performance.score * 100, // e.g. percentage
			FCP: 	audits['first-contentful-paint'].numericValue / 1000, // milliseconds to second
			LCP: 	audits['largest-contentful-paint'].numericValue / 1000, // milliseconds to second
			CLS: 	audits['cumulative-layout-shift'].displayValue,
			TTI: 	audits['interactive'].numericValue / 1000 // milliseconds to second
		}
	}



} 


export default fetchPsi