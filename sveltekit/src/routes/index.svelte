
<script  context="module">
    import client from '$lib/sanityClient'
    export async function load() {
		const query = `*[_type == "post"]{
			title,
            publishedAt,
            slug,
		}`;
		const posts = await client.fetch(query);

		return {
			props: { posts }
		};
	}
</script>
<script>

export let posts;
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>First note: after setting up sveltekit, running <code>npm install</code> gave  ann error:</p>
<p>svelte-kit sync command not found</p>
<p>So I ran <code>npm run dev</code> and started the project</p>

<div>

    {#each posts as { title,publishedAt,slug}}
    <h2><a href="{slug.current}">{title}</a></h2>
    <p>{publishedAt}</p>
	{:else}
    <p>No posts yet</p>
	{/each}
</div>