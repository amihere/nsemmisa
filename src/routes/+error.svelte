<script>
  import { page } from "$app/stores";
  import Action from "$lib/Action.svelte";
  import Button from "$lib/Button.svelte";
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<section class="py-8">
  <h2>Error {$page.status}</h2>

  <div class="px-4 py-8 md:p-8">
    <div class="copy text-xl">
      {#if $page.status === 404}
        <p>Page not found.</p>
      {:else}
        <p>{$page.error.message}.</p>
      {/if}
    </div>
  </div>

  <Action class="px-4 py-8 md:p-8">
    <Button href="/">Return home</Button>
  </Action>
</section>
