<script>
  export let name;
  export let date;
  export let description;
</script>

<div>
  <ul>
    <li>
      <strong>{name} {date}:</strong>
      <span>{description}</span>
    </li>
  </ul>
</div>

<style>
  ul {
    margin-top: 0;
    margin-bottom: 8px;
  }
</style>