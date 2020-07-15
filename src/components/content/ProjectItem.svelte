<script>
  export let name;
  export let date;
  export let description;
</script>

<div>
  <h4>{name} {date}</h4>
  <ul>
    {#each description as line}
      <li>{line}</li>
    {/each}
  </ul>
</div>

<style>
  h4 {
    font-weight: normal;
    margin-bottom: 0;
    font-size: 14px;
  }

  ul {
    margin-top: 0;
  }
</style>