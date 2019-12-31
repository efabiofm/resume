<script>
  import Icon from 'fa-svelte';
  import { contactItems } from '../../data.js';
</script>

<section>
  <h2>Contact</h2>
  {#each contactItems as item}
    <p>
      <Icon icon={item.icon}></Icon>
      <span>{item.value}</span>
    </p>
  {/each}
</section>
