<script>
  export let name = "John Doe";
  export let message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  export let image = "https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo.jpg";
  export let href = "https://example.com";
</script>

<button class="btn max-w-sm h-auto p-0 overflow-hidden border-2 border-white/5">
  <a href={href} target="_blank" rel="noopener noreferrer" class="flex flex-row gap-2 overflow-hidden text-left font-medium">
    <img src={image} alt="Face of {name}" class="h-full w-24">
    <div class="flex flex-col items-start p-2">
      <h1 class="font-bold text-lg">{name}</h1>
      <p class="text-pretty">{message}</p>
    </div>
  </a>
</button>