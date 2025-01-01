<script>
  import { format } from "date-fns";
  import config from "../config.js";
  import { page } from "$app/stores";

  import PinIcon from "$lib/icons/PinIcon.svelte";

  let {
    limit = 5,
    posts = $page.data.posts.slice(0, limit || Infinity),
  } = $props();
</script>

<section class="py-8">
  <div class="px-4 py-7 md:px-8">
    <ul class="text-metadata space-y-2 sm:space-y-0">
      {#each posts as item (item.id)}
        <li>
          <a
            href="/jobs/{item.id}"
          >
            <span class="block">
              {#if item.pinned}
                <span class="float-left mr-1 flex" >
                  <PinIcon />
                </span>
              {/if}

              <span>{item.title}</span>
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  a {
    color: #040404;
    font-size: 0.9em;
    padding: 10em 1em;
  }
</style>
