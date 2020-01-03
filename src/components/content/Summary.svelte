<script>
  import { summaryItems } from '../../data.js';
</script>

<section>
  <h2>Summary</h2>
  <hr>
  <ul>
    {#each summaryItems as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>