<script>
  import ReachOut from "$lib/components/ReachOut.svelte";
import Intro from "$lib/sections/Intro.svelte";
</script>

<span class="flex flex-col gap-16 justify-center max-w-md">
  <Intro />
  <article class="prose">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Varius risus adipiscing scelerisque scelerisque. Ultrices mauris varius neque scelerisque. Suscipit etiam ultricies at pharetra sed mauris donec.</p>
    <p>Adipiscing nascetur elit faucibus dolor aenean faucibus bibendum. Varius praesent consectetur egestas semper quisque nisl quis egestas pellentesque.</p>
    <p>Donec a mi euismod leo maecenas rhoncus in proin et. Lorem vulputate enim porta curabitur id sit aenean vitae tincidunt.</p>
    <h1>Tools</h1>
    <span class="flex flex-col items-center gap-2">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=luau,ts,html,css" alt="Languages">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=robloxstudio,git,svelte,tailwind,daisyui" alt="Frameworks">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=vscode,figma,github,blender" alt="Tools">
      <img class="m-0" src="https://go-skill-icons.vercel.app/api/icons?i=windows,brave,obsidian,signal,discord" alt="Personal Tools">
    </span>
  </article>
</span>