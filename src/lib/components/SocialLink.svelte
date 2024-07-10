<script>
  export let href = "https://example.com";
</script>

<a role="button" href={href} target="_blank" rel="noopener noreferrer" class="btn btn-link btn-square btn-lg">
  <slot />
</a>

<style>
  a :global(svg path) {
    transition-duration: 300ms;
  }

  a:hover :global(svg path) {
    fill: #9F84FF;
    transition-duration: 300ms;
  }
</style>