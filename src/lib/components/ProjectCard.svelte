<script lang="ts">
  import { projects } from "$lib/data/projects";
  import type { Project } from "$lib/data/projects";

  export let project: Project;
</script>

<a href={project.href} target="_blank" rel="noopener noreferrer">
  <div class="relative block w-full aspect-video rounded-xl ring-white/20 ring-1 overflow-hidden transition duration-300 hover:duration-300 hover:ring-primary hover:ring-2 hover:bg-fixed">
    <img src={project.bannerSrc} alt="Project thumbnail" class="w-full h-full duration-500 hover:duration-500 hover:scale-105" />
    <span class="absolute bottom-0 left-0 right-0 bg-black/60 p-2 pl-4 pr-4 text-2xl text-white font-medium flex items-center justify-between pointer-events-none">
      <p class="text-xl">{project.displayName}</p><img src="/src/lib/icons/{project.platform.toLowerCase()}.svg" alt="{project.platform}" class="h-8" />
    </span>
  </div>
</a>