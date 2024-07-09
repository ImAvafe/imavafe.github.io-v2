<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import TagButton from "$lib/components/TagButton.svelte";
  import { projects } from "$lib/data/projects";
  import FilterRow from "$lib/components/FilterRow.svelte";
</script>

<span class="flex-col gap-4 inline-flex">
  <span class="flex-col gap-1 inline-flex items-center">
    <FilterRow filterType="tags" />
    <FilterRow filterType="sorts" />
  </span>
  <span class="w-full flex-col gap-3 inline-flex">
    {#each projects as project}
      <ProjectCard project={project} />
    {/each}
  </span>
</span>