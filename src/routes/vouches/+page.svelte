<script>
  import PersonCard from "$lib/components/PersonCard.svelte";
  import { vouches } from "$lib/data/vouches";
</script>

<div class="max-w-4xl w-screen flex flex-col gap-8 items-center">
  <div class="w-full flex flex-row flex-wrap justify-center gap-2">
    {#each vouches as person}
      <PersonCard
        name = {person.name}
        image = {person.image}
        message = {person.message}
        href = {person.href}
      />
    {/each}
  </div>
  <a class="w-full max-w-sm" href="https://docs.google.com/forms/d/e/1FAIpQLSc4IsE-AUAM3WTTOfKfZ25KYMKzsj-zj47dxYUjZHazxvc3Og/viewform" target="_blank" rel="noopener noreferrer">
    <button class="btn w-full">Vouch</button>
  </a>
</div>