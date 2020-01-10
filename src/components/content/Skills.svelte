<script>
  import Icon from 'fa-svelte';
  import { faCog } from '@fortawesome/free-solid-svg-icons';
  import { skillsItems } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faCog} />
    <span>&nbsp;Skills</span>
  </h2>
  <hr>
  <br>
  {#each skillsItems as item}
    <span class="skills__tag">{item}</span>
  {/each}
</section>

<style>
  .skills__tag {
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    margin: 0 8px 8px 0;
    display: inline-block;
  }
</style>