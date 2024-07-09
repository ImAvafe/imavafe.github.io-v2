<script>
  import Logo from "$lib/components/Logo.svelte";
  import SocialLink from "$lib/components/SocialLink.svelte";
</script>

<div class="flex-col justify-start items-center gap-4 inline-flex">
  <div class="avatar">
    <div class="w-44 rounded-full">
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
    <SocialLink href="https://www.roblox.com/users/144146784/profile" src="/src/lib/icons/roblox.svg" alt="Roblox" />
    <SocialLink href="https://github.com/ImAvafe" src="/src/lib/icons/github.svg" alt="Github" />
    <SocialLink href="https://discord.com/invite/fyeYey62Dm" src="/src/lib/icons/discord.svg" alt="Discord" />
    <SocialLink href="https://loneka.com" src="/src/lib/icons/loneka.svg" alt="Loneka" />
  </div>
</div>