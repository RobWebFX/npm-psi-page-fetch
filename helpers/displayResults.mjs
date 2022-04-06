import colors from '@colors/colors'


const displayResults = allPageResults => {
	allPageResults.forEach( pageResults => {
		const { url, mobile, desktop } = pageResults
		
		colors.setTheme({
			url: [
				'bgBrightGreen',
				'black',
				'bold',
			],
			strategy: [
				'brightCyan',
				'black',
			],
			notice: [
				'italic',
				'gray',
			]
		})
		
		console.log( `${colors.url( `URL: ${url}` )}` )

		console.log( colors.strategy( 'MOBILE' ) )
		console.table( mobile )
		
		console.log( colors.strategy( 'DESKTOP' ) )
		console.table( desktop )
		
		console.log( colors.notice( '(FCP, LCP, and TTI in milliseconds)' ) )
	})
}


export default displayResults