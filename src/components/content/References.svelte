<script>
  import Icon from 'fa-svelte';
  import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
  import ReferencesItem from './ReferencesItem.svelte';
  import { referencesItems } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faClipboardList} />
    <span>References</span>
  </h2>

  {#each referencesItems as item}
    <ReferencesItem {...item} />
  {/each}
</section>