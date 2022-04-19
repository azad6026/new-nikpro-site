import sanityClient from '@sanity/client';

const client =  sanityClient({
	projectId: '8ij2hypb',
	dataset: 'production',
	useCdn: true,
	apiVersion: 'v2022-04-11'
});
export default client;