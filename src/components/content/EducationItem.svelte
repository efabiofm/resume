<script>
  export let institute;
  export let from;
  export let to;
  export let degree;
</script>

<div class="education__item">
  <h3 class="text--bold">{degree}</h3>
  <h3 class="education__item__institute">{institute}</h3>
  <p class="text--date">{from} - {to}</p>
</div>

<style>
  .education__item {
    margin-bottom: 1em;
  }

  .education__item__institute {
    margin: 4px 0;
  }
</style>