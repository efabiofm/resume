<script>
  export let from;
  export let to;
  export let company;
  export let position;
  export let description;
</script>

<div class="experience-item">
  <div class="experience-item__title">
    <h3>{company}</h3>
    <p>{from} - {to}</p>
  </div>
  <h4>{position}</h4>
  <p>{description}</p>
</div>

<style>
  .experience-item__title {
    display: flex;
  }
</style>