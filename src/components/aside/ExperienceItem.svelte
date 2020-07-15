<script>
  export let from;
  export let to;
  export let company;
  export let position;
  export let description;
</script>

<div class="experience__item">
  <div class="experience__item__title">
    <h3 class="text--bold">{position}</h3>
  </div>
  <h3>{company}</h3>
  <div>
    <p class="text--date">{from} - {to}</p>
    {#if typeof description === 'object'}
      <ul>
        {#each description as line}
          <li>{line}</li>
        {/each}
      </ul>
    {:else}
      <p>{description}</p>
    {/if}
  </div>
</div>

<style>
  .experience__item {
    margin-bottom: 1em;
  }

  .experience__item__title {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin-top: 0;
  }
</style>