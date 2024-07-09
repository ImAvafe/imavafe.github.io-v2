<script lang="ts">
  import { currentSort } from "../../stores";

  export let sort: string;

  $: active = $currentSort == sort

  function setSort() {
    return sort
  }
</script>

<button on:click={() => {currentSort.update(setSort)}} class="btn btn-sm {(active) ? 'btn-primary' : 'btn-neutral'}">{sort}</button>