<script>
  import LevelBar from '../LevelBar.svelte';
  import { languagesItems } from '../../data.js';
</script>

<section>
  <h2>Languages</h2>
  <hr>
  {#each languagesItems as item}
    <p><strong>{item.language}: </strong>{item.level}</p>
    <LevelBar percentage={item.percentage} />
    <br>
  {/each}
</section>