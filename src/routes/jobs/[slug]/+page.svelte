<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import Posting from '$lib/Posting.svelte';

let { data } = $props();
</script>

<SEO
  title={`${data.post.title} — ${config.siteTitle}`}
  description={data.post.description}
/>

<Posting post={data.post} />
