import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'xxxxxx',
	dataset: 'production',
	useCdn: true,
	apiVersion: 'v2021-08-02'
});