<script lang="ts">
  import Gallery from 'svelte-gallery';
  import { photos } from '$lib/data/gallery';
  import Photo from '$lib/components/Photo.svelte';

  function shuffle(array: any[]) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  let shownPhotos = photos;
  let fullscreen = false;
</script>

<div class="flex flex-col items-center gap-10">
  <article class="prose text-center">
    <p>They would be chronological and zoomable if I cared enough. Unfortunately, I just don't.</p>
  </article>
  <div class="w-full flex flex-col gap-4">
    <span class="flex flex-row gap-2">
      <button on:click={() => {
        console.log(!fullscreen)
        fullscreen = !fullscreen;
      }} class="btn flex-grow">Zoom</button>
      <button on:click={() => {
        shownPhotos = shuffle(photos);
      }} class="btn flex-grow">Shuffle</button>
    </span>
  </div>
</div>
<div class="{fullscreen ? "max-w-6xl rounded-3xl" : "max-w-full"} w-screen overflow-hidden transition-all duration-500">
  <Gallery images={shownPhotos} gutter={12} imageComponent={Photo} />
</div>