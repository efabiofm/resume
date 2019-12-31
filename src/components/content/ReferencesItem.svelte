<script>
  export let name;
  export let position;
  export let company;
  export let phone;
  export let email;
</script>

<div class="references__item">
  <strong>{name}</strong>
  <p>{position} at {company}</p>
  <p>{phone}</p>
  <p>{email}</p>
</div>

<style>
  .references__item {
    display: inline-block;
  }
</style>