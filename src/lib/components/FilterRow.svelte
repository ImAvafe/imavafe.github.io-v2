<script>
  import { tags } from "$lib/data/filters";
  import { sorts } from "$lib/data/filters";
	import SortButton from "./SortButton.svelte";
  import TagButton from "./TagButton.svelte";

  export let filterType;
</script>

<span class="flex-row gap-1.5 inline-flex items-center">
  <img src="{(filterType == 'tags') ? '/src/lib/icons/filter.svg' : '/src/lib/icons/sort.svg'}" alt="{filterType}">
  <span class="flex-row gap-1 inline-flex">
    {#if filterType == 'tags'}
      {#each tags as tag}
        <TagButton tag={tag} />
      {/each}
    {:else}
      {#each sorts as sort}
        <SortButton sort={sort} />
      {/each}
    {/if}
  </span>
</span>