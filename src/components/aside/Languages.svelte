<script>
  import { languagesItems } from '../../data.js';
</script>

<section>
  <h2 class="text--uppercase">Languages</h2>
  {#each languagesItems as item}
    <p><strong>{item.language}: </strong>{item.level}</p>
  {/each}
</section>