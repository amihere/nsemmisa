<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import JobsSection from '$lib/JobsSection.svelte';
</script>

<SEO
  title={`${config.siteTitle} ${config.archiveTitle}`}
  description={config.siteTagline}
  og={{ title: config.archiveTitle }}
/>

<JobsSection />
