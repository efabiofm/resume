<script>
  import Icon from 'fa-svelte';
  import { skillsItems } from '../../data.js';
</script>

<section>
  <h2 class="text--uppercase">Tech Skills</h2><br>
  <div class="skills__container">
    {#each skillsItems as item}
      <span class="skills__tag">{item}</span>
    {/each}
  </div>
</section>

<style>
  .skills__container {
    margin-bottom: 1em;
  }
  .skills__tag {
    padding: 5px;
    border-radius: 5px;
    margin: 0 5px 5px 0;
    display: inline-block;
    background: #4f90cd;
    color: white;
    font-size: 12px;
  }
</style>