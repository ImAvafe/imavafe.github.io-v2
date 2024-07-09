<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import TagButton from "$lib/components/TagButton.svelte";
</script>

<span class="flex-col gap-3 inline-flex">
  <span class="flex-row gap-2 inline-flex">
    <TagButton tag="Tag" />
    <TagButton tag="Tag2" />
  </span>
  <span class="w-full flex-col gap-3 inline-flex">
    <ProjectCard name="Poser! 🤔" iconSrc="/src/lib/icons/roblox.svg" href="https://www.roblox.com/games/12716101148" bannerSrc="/src/lib/img/projects/poser.png" />
    <ProjectCard name="OnyxUI" iconSrc="/src/lib/icons/github.svg" href="https://www.roblox.com/games/12716101148" bannerSrc="/src/lib/img/projects/OnyxUI.png" />
  </span>
</span>