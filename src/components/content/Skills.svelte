<script>
  import { skillsItems } from '../../data.js';
</script>

<section>
  <h2>Skills</h2>
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
    margin: 0 10px 10px 0;
    display: inline-block;
  }
</style>