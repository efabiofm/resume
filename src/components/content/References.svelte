<script>
  import Icon from 'fa-svelte';
  import { faClipboard } from '@fortawesome/free-solid-svg-icons';
  import ReferencesItem from './ReferencesItem.svelte';
  import { referencesItems } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faClipboard} />
    <span>&nbsp;references</span>
  </h2>
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