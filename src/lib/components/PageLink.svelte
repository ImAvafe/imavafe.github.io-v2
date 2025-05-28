<script>
  import { page } from "$app/stores";

  export let href = "/";
  export let title = "about";
  export let newTab = false;

  $: active = $page.url.pathname === href;
</script>

<a href="{href}" target={newTab ? "_blank" : ''} class="text-lg transition-colors hover:text-primary {active ? 'text-primary' : 'text-white'}">{title}</a>