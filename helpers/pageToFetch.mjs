import fetchPsi from './fetchPsi.mjs'


const pageToFetch = async url => {

	return {
		url,
		mobile:		await fetchPsi.mobile( url ),
		desktop:	await fetchPsi.desktop( url ),
	}

} 


export default pageToFetch