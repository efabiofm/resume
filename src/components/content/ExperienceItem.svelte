<script>
  export let from;
  export let to;
  export let company;
  export let position;
  export let description;
</script>

<div class="experience__item">
  <div class="experience__item__title">
    <h3>{company}</h3>
    <p class="text--italic">{from} - {to}</p>
  </div>
  <h4>{position}</h4>
  <p>{description}</p>
</div>

<style>
  .experience__item {
    margin-bottom: 1.5em;
  }

  .experience__item:last-child {
    padding-top: 8em;
  }

  .experience__item__title {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    margin-bottom: .8em;
    color: #888;
  }
</style>