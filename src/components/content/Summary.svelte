<script>
  import Icon from 'fa-svelte';
  import { faUserTie } from '@fortawesome/free-solid-svg-icons';
  import { summaryItems } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faUserTie} />
    <span>&nbsp;Summary</span>
  </h2>
  <hr>
  <ul>
    {#each summaryItems as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>