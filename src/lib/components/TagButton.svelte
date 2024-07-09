<script lang="ts">
  import { currentTags } from "../../stores";

  export let tag: string = "tag";

  $: active = ($currentTags.findIndex((value) => {return value == tag})) >= 0

  function toggleTag(tags: [string]) {
    if (active) {
      tags.splice(tags.findIndex((chosenTag: string) => {return chosenTag == tag}), 1)
    } else {
      tags.push(tag)
    }

    return tags
  }
</script>

<button on:click={() => {currentTags.update(toggleTag)}} class="btn btn-sm {(active) ? 'btn-primary' : 'btn-neutral'}">{tag}</button>