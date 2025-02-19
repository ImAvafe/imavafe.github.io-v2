<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { projects } from "$lib/data/projects";
  import FilterRow from "$lib/components/FilterRow.svelte";
	import { currentSort, currentTag } from "../../stores";
  import { tagsCompatibility } from "$lib/data/filters";

  let expanded = false;

  $: sortedProjects = ($currentSort == "Best") ? projects : ($currentSort == "Newest") ? Array.from(projects).sort((a, b) => b.creationStamp - a.creationStamp) : ($currentSort == "Abc.") ? Array.from(projects).sort((a, b) => a.displayName.localeCompare(b.displayName)) : projects

  function toggleExpansion() {
    expanded = !expanded

    if (!expanded) {
      document.getElementById('projects')?.scrollIntoView({ behavior: "smooth" })
    }
  }
</script>

<span id="projects" class="flex-col gap-6 inline-flex">
  <span class="flex-col gap-1 inline-flex items-center">
    <FilterRow filterType="tags" />
    <FilterRow filterType="sorts" />
  </span>
  <span class="w-full flex-col gap-4 py-1 overflow-y-clip inline-flex" style="max-height: {expanded && "100%" || "980px"};">
    {#each sortedProjects as project}
      {#if tagsCompatibility[$currentTag].find((type) => {return type == project.type})}
        <ProjectCard project={project} />
      {/if}
    {/each}
  </span>
  <button on:click={toggleExpansion} class="btn {!expanded && "btn-primary"}">{expanded && "Less" || "More"}</button>
</span>