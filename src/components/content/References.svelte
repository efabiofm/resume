<script>
  import ReferencesItem from './ReferencesItem.svelte';
  import { referencesItems } from '../../data.js';
</script>

<section>
  <h2>References</h2>
  <hr>
  <div class="references">
    {#each referencesItems as item}
      <ReferencesItem {...item} />
    {/each}
  </div>
</section>

<style>
  .references {
    display: flex;
    justify-content: space-between;
  }
</style>