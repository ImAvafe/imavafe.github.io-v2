<script>
	import { modalMessage } from "../../stores";
</script>

<dialog id="info_modal" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box flex flex-col border-primary/20 p-0 border-2">
    <span class="p-8 flex flex-col gap-4">
      <p class="text-lg">{$modalMessage}</p>
      <div class="divider"></div>
    </span>
  </div>
  <form method="dialog" class="modal-backdrop bg-black/50">
    <button>Close</button>
  </form>
</dialog>