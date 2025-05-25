<script>
  import { page } from "$app/stores";

  export let href = "/";
  export let title = "about";

  $: active = $page.url.pathname === href;
</script>

<a href="{href}" class="text-lg transition-colors hover:text-primary {active ? 'text-primary' : 'text-white'}">{title}</a>