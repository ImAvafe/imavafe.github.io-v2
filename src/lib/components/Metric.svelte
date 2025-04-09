<script lang="ts">
  export let name: string = "Number"
  export let value: String = "0"
</script>

<span class="flex flex-col items-center space-y-1">
  <p class="font-bold text-3xl">{value}</p>
  <p class="text-lg/6 text-wrap text-center">{name}</p>
</span>