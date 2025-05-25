<script>
  import { openDiscordDms } from "$lib/openDiscordDms";
</script>

<div class="prose my-8 flex flex-col">
  <h1>
    Something pique your interest?
  </h1>
  <span class="cl-effect-1">
    - <a on:click={openDiscordDms} role="button" href="#projects" class="text-primary text-2xl cursor-pointer">Let's chat</a>
  </span>
</div>

<style>
  .cl-effect-1 a::before,
  .cl-effect-1 a::after {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }

  .cl-effect-1 a::before {
    margin-right: 10px;
    content: '[';
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }

  .cl-effect-1 a::after {
    margin-left: 10px;
    content: ']';
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  .cl-effect-1 a:hover::before,
  .cl-effect-1 a:hover::after,
  .cl-effect-1 a:focus::before,
  .cl-effect-1 a:focus::after {
    opacity: 1;
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }
</style>