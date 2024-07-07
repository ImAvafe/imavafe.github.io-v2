<script>
  import Logo from "/src/lib/components/Logo.svelte";
</script>

<div class="flex-col justify-start items-center gap-4 inline-flex">
  <div class="avatar">
    <div class="w-44 rounded-full border-2 border-white/opacity-20">
      <img src="/src/lib/img/profile-picture.png" alt="Avafe's PFP"/>
    </div>
  </div>
  <div class="w-64 h-24 flex-col justify-start items-center gap-2.5 inline-flex">
    <Logo/>
    <div class="w-64 h-24 flex-col justify-start items-center gap-2.5 inline-flex">
      <div class="self-stretch text-center text-white text-lg font-medium leading-snug">Game developer, creator of cool things</div>
    </div>
  </div>
  <div class="justify-center items-center inline-flex">
    <a role="button" href="https://www.roblox.com/users/144146784/profile" target="_blank" rel="noopener noreferrer" class="btn btn-link btn-square btn-lg"><img src="/src/lib/icons/roblox.svg" alt="Roblox" /></a>
    <a role="button" href="https://github.com/ImAvafe" target="_blank" rel="noopener noreferrer" class="btn btn-link btn-square btn-lg"><img src="/src/lib/icons/github.svg" alt="Github" /></a>
    <a role="button" href="https://discord.com/invite/fyeYey62Dm" target="_blank" rel="noopener noreferrer" class="btn btn-link btn-square btn-lg"><img src="/src/lib/icons/discord.svg" alt="Discord" /></a>
    <a role="button" href="https://loneka.com/" target="_blank" rel="noopener noreferrer" class="btn btn-link btn-square btn-lg"><img src="/src/lib/icons/loneka.svg" alt="Loneka" /></a>
  </div>
</div>