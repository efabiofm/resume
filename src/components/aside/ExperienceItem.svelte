<script>
  export let from;
  export let to;
  export let company;
  export let position;
  export let description;
  export let participation;
</script>

<div class="experience__item">
  <div class="experience__item__title">
    <h3 class="text--bold">{position}</h3>
    <p class="text--date">{from} - {to}</p>
  </div>
  <h4 class="experience__item__company">{company}</h4>
  <div>
    {#if typeof description === 'object'}
      <ul>
        {#each description as line}
          <li>{line}</li>
        {/each}
      </ul>
    {:else}
      <p>{description}</p>
    {/if}
    {#if participation}
      <h5 class="participation__title">Participation</h5>
      <div class="participation__list">
        <ul>
          <li>Architecture and Design: {participation.architectureAndDesign}</li>
          <li>Development: {participation.development}</li>
        </ul>
        <ul class="ml-7">
          <li>QA: {participation.qa}</li>
          <li>DevOps: {participation.devOps}</li>
        </ul>
      </div>
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

  .experience__item__company {
    margin: 4px 0 12px 0;
  }

  .ml-7 {
    margin-left: 28px;
  }

  .participation__title {
    margin-top: 0;
    margin-bottom: 4px;
  }

  .participation__list {
    display: flex;
  }

  h4 {
    font-weight: normal;
  }

  ul {
    margin-top: 0;
    line-height: 1.8;
  }
</style>