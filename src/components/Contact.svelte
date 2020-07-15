<script>
  import Icon from 'fa-svelte';
  import { contactItems } from '../data.js';
</script>

<section class="contact">
  {#each contactItems as item}
    <p class="contact__item">
      <Icon icon={item.icon}></Icon>
      <span>{item.value}</span>
    </p>
  {/each}
</section>

<style>
  .contact {
    background: #2b343f;
    color: white;
    padding: .5em;
    text-align: center;
  }
  
  .contact__item {
    display: inline-block;
    margin-right: 2em;
  }

  .contact__item span {
    padding-left: .5em;
    width: 169px;
    overflow-y: inherit;
  }
</style>