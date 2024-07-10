<script lang="ts">
  import "../app.css";
  import Footer from "$lib/sections/Footer.svelte"
  import { fade } from "svelte/transition";

  let mousePosition: {x: number, y: number} | null;

	function mousemove(event: MouseEvent) {
    if (event.currentTarget != null) {
      let r = event.currentTarget?.getBoundingClientRect();
      mousePosition = 
		  mousePosition = {x:event.clientX-r.left, y:event.clientY-r.top}
    }
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions (background glow is not interactable)> -->
<div class="overflow-hidden" on:mousemove={mousemove}>
  {#if mousePosition}
		<span transition:fade  class="overflow-hidden blur-[40vh] absolute top-[-35vh] left-[-35vh] w-[70vh] h-[70vh] rounded-[50%] bg-[#9F84FF70] pointer-events-none" style:transform="translate({mousePosition.x}px, {mousePosition.y}px)"></span>
	{/if}

  <slot />
  <Footer />
</div>