<script>
import { page } from '$app/stores';
let { title, description} = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="bk:type" content="website" />
  <meta property="bk:title" content={title} />
  <meta property="bk:url" content={$page.url.href} />
  <meta property="bk:description" content={description} />
</svelte:head>
