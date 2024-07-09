<script lang="ts">
  import { currentTag } from "../../stores";

  export let tag: string;

  $: active = $currentTag == tag

  function setTag() {
    return tag
  }
</script>

<button on:click={() => {currentTag.update(setTag)}} class="btn btn-sm {(active) ? 'btn-primary' : 'btn-neutral'}">{tag}</button>