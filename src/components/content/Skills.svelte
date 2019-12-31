<script>
  import Icon from 'fa-svelte';
  import { faTools } from '@fortawesome/free-solid-svg-icons'; 
  import { skillsItems } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faTools} />
    <span>Skills</span>
  </h2>
  {#each skillsItems as item}
    <span class="skills__tag">{item}</span>
  {/each}
</section>

<style>
  .skills__tag {
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    display: inline-block;
  }
</style>