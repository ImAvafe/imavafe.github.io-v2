<script>
  import Intro from "$lib/sections/Intro.svelte";
  import { openDiscordDms } from "$lib/openDiscordDms";
</script>

<span class="flex flex-col gap-16 justify-center max-w-md">
  <Intro />
  <article class="prose">
    <h1>About</h1>
    <p>I'm a games & software developer, primarily honed in on programming and design. Much of my professional work is done on Roblox, though I also enjoy playing with web and app technologies.</p>
    <p>My work is primarily housed under my solo studio, Loneka. Its <a href="https://loneka.com">games</a> have accrued over 40M sessions, and its <a href="https://loneka.com/suite">open-source software</a> will be soon utilized by billions more.</p>
    <p>I was first exposed to tech in the family barn, seeing a variety of things early on: terminal scripts, websites, Linux, circuity, and good old heavy machinery. 🚜🤠</p>
    <p>Fast-forward several years, I'd fallen in love with videogames, and I was suddenly in need of money. Nowadays, work is much more a willing passion for me, and I feel excited to sit down most days and make things.</p>
    <p>I've also recently gone down the academic pipeline, and many of my work hours now go to preparing for university.</p>
    <p>When I'm not working or studying, my hobbies include: hanging out with others, thinking, reading <i>(audiobooks 💀)</i>, and of course, playing games.</p>
    <br />

    <h1>Tools</h1>
    <span class="flex flex-col items-center gap-2">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=luau,ts,html,css" alt="Languages">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=robloxstudio,git,svelte,tailwind,daisyui" alt="Frameworks">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=vscode,figma,github,blender" alt="Tools">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=windows,brave,obsidian,signal,discord" alt="Personal Tools">
    </span>
    <br />

    <h1>Contact</h1>
    <p>
      I mainly message through <a on:click={openDiscordDms} role="button">Discord</a>, 
      but you can also email me at <a href="mailto:ava@avafe.me">ava@avafe.me</a>.
      Use whichever you prefer, as I'm indifferent.
    </p>
    <p><b>Let's connect! ☝️🤓</b> <i>(this is where I would put my LinkedIn if they didn't ban me for reasons unbeknownst to me)</i></p>
    <br />
  </article>
</span>