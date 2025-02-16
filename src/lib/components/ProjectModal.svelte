<script>
  import { openProject } from "../../stores";

  $: year = new Date(($openProject?.creationStamp || 0) * 1000).getFullYear()
</script>

<dialog id="project_modal" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box flex flex-col border-primary/20 p-0 border-2">
    <span class="h-36 overflow-hidden flex items-center">
      <img src="{$openProject?.bannerSrc}" alt="Thumbnail" class="w-full" />
    </span>
    <span class="flex flex-col gap-8 p-4">
      <span class="flex flex-col gap-5">
        <span>
          <h1 class="text-2xl font-bold">{$openProject?.displayName}</h1>
          <p>{year}, {$openProject?.role}</p>
        </span>
        <p>{$openProject?.description}</p>
      </span>
      <a href="{$openProject?.href}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit</a>
    </span>
  </div>
  <form method="dialog" class="modal-backdrop bg-black/50">
    <button>Close</button>
  </form>
</dialog>