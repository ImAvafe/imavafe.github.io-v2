<script>
  import { openProject } from "../../stores";
  import MetricRow from "./MetricRow.svelte";

  $: year = new Date(($openProject?.creationStamp || 0) * 1000).getFullYear()
  $: type = String($openProject?.displayType || $openProject?.type).charAt(0).toUpperCase() + String($openProject?.displayType || $openProject?.type).slice(1);

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
</script>

<dialog id="project_modal" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box flex flex-col border-primary/20 p-0 border-2">
    <span class="h-36 overflow-hidden flex items-center">
      <img src="{$openProject?.bannerSrc}" alt="Thumbnail" class="w-full" />
    </span>
    <span class="flex flex-col gap-8 p-4">
      <span class="flex flex-col gap-5">
        <span>
          <h1 class="text-3xl font-bold">{$openProject?.displayName}</h1>
          <p class="text-lg">{type}, {year}, {$openProject?.role}</p>
        </span>
        <p>{$openProject?.description || loremIpsum}</p>
        
          {#if $openProject?.metrics != null}
            <span class="py-2">
              <MetricRow metrics={$openProject?.metrics} />
            </span>
          {/if}
      </span>
      <a href="{$openProject?.href}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open</a>
    </span>
  </div>
  <form method="dialog" class="modal-backdrop bg-black/50">
    <button>Close</button>
  </form>
</dialog>