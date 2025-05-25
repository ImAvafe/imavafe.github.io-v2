<script>
	import PageLink from "./PageLink.svelte";
</script>

<button on:click={() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}} class="btn w-full max-w-md p-0 px-8 min-h-0 bg-neutral-900 rounded-none rounded-bl-2xl rounded-br-2xl drop-shadow-lg outline outline-white/30 outline-1 inline-flex fixed top-0 z-10">
  <span class="text-white">🡱</span>
  <span class="prose flex-1 flex justify-center items-center gap-2.5">
    <PageLink title="about" href="/" />
    <PageLink title="projects" href="/projects/" />
    <PageLink title="gallery" href="/gallery/" />
    <PageLink title="blog" href="/blog/"/>
  </span>
  <span class="text-white">🡱</span>
</button>