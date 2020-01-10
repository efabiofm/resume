<script>
  import Icon from 'fa-svelte';
  import { contactItems } from '../../data.js';
</script>

<section>
  <h2>Contact</h2>
  <hr>
  {#each contactItems as item}
    <p class="contact__item">
      <Icon icon={item.icon}></Icon>
      <span>{item.value}</span>
    </p>
  {/each}
</section>

<style>
  .contact__item {
    display: flex;
    align-items: center;
  }

  .contact__item span {
    padding-left: .5em;
    width: 169px;
    overflow-y: inherit;
  }
</style>