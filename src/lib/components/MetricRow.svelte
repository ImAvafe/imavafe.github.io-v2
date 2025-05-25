<script lang="ts">
  import Metric from "./Metric.svelte";

  type metric = {
    name: string,
    value: string
  }

  export let metrics: Array<metric>
</script>

<span class="flex flex-row gap-8 justify-center">
  {#each metrics as metric}
    <Metric name={metric.name} value={metric.value} />
  {/each}
</span>