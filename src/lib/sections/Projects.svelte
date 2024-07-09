<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import TagButton from "$lib/components/TagButton.svelte";
  import { projects } from "$lib/data/projects";
</script>

<span class="flex-col gap-3 inline-flex">
  <span class="flex-row gap-2 inline-flex">
    <TagButton tag="Tag" />
    <TagButton tag="Tag2" />
  </span>
  <span class="w-full flex-col gap-3 inline-flex">
    {#each projects as project}
      <ProjectCard project={project} />
    {/each}
  </span>
</span>