<script>
  export let institute;
  export let from;
  export let to;
  export let degree;
</script>

<div class="education__item">
  <strong>{degree}</strong>
  <p class="text--italic">{from} - {to}</p>
  <p>{institute}</p>
</div>

<style>
  .education__item {
    margin-bottom: 1em;
  }
</style>