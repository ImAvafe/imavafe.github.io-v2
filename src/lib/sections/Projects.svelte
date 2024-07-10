<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { projects } from "$lib/data/projects";
  import FilterRow from "$lib/components/FilterRow.svelte";
	import { currentSort, currentTag } from "../../stores";
  import { tagsCompatibility } from "$lib/data/filters";

  $: sortedProjects = ($currentSort == "Best") ? projects : ($currentSort == "Newest") ? Array.from(projects).sort((a, b) => b.creationStamp - a.creationStamp) : ($currentSort == "Abc.") ? Array.from(projects).sort((a, b) => a.displayName.localeCompare(b.displayName)) : projects
</script>

<span class="flex-col gap-4 inline-flex">
  <span class="flex-col gap-1 inline-flex items-center">
    <FilterRow filterType="tags" />
    <FilterRow filterType="sorts" />
  </span>
  <span class="w-full flex-col gap-3 inline-flex">
    {#each sortedProjects as project}
      {#if tagsCompatibility[$currentTag].find((type) => {return type == project.type})}
        <ProjectCard project={project} />
      {/if}
    {/each}
  </span>
</span>