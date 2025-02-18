<script>
  import Intro from "$lib/sections/Intro.svelte";
	import Projects from "$lib/sections/Projects.svelte";
  import ReachOut from "$lib/components/ReachOut.svelte";
</script>

<div class="pt-14 flex-col justify-center items-center inline-flex">
  <div class="max-w-6xl gap-4 w-96 flex-col justify-center items-center inline-flex px-4">
    <Intro />
    <div class="divider pl-10 pr-10"></div>
    <Projects />
    <div class="divider pl-10 pr-10"></div>
    <ReachOut />
  </div>
</div>