<script>
  export let name = "Project";
  export let iconSrc = "/src/lib/icons/roblox.svg";
  export let href = "https://avafe.me"
  export let bannerSrc = "/src/lib/img/projects/Poser.png"
</script>

<a href={href} target="_blank">
  <div class="relative block w-full aspect-video rounded-xl ring-white/20 ring-1 overflow-hidden transition duration-300 hover:duration-300 hover:ring-primary hover:ring-2 hover:bg-fixed">
    <div class="bg-[url('{bannerSrc}')] bg-cover w-full h-full duration-500 hover:duration-500 hover:scale-105"></div>
    <span class="absolute bottom-0 left-0 right-0 bg-black/60 p-2 pl-4 pr-4 text-2xl text-white font-medium flex items-center justify-between">
      <p class="text-xl">{name}</p><img src="{iconSrc}" alt="Site icon" class="h-8" />
    </span>
  </div>
</a>