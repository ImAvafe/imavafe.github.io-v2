<script>
  import Intro from "$lib/sections/Intro.svelte";
	import Projects from "$lib/sections/Projects.svelte";
</script>

<div class="w-full pt-14 flex-col justify-center items-center inline-flex">
  <div class="max-w-5xl w-96 flex-col justify-center items-center inline-flex">
    <Intro />
    <div class="divider pl-10 pr-10"></div>
    <Projects />
  </div>
</div>