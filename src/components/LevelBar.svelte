<script>
  export let percentage;
</script>

<div class="level-bar">
  <div class="level-bar__fill" style="width: {percentage}%"></div>
</div>

<style>
  .level-bar {
    background: white;
  }

  .level-bar__fill {
    background: #aaa;
  }

  .level-bar,
  .level-bar__fill {
    height: 12px;
  }
</style>