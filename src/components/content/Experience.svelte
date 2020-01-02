<script>
  import ExperienceItem from './ExperienceItem.svelte';
  import { experienceItems } from '../../data.js';
</script>

<section>
  <h2>Experience</h2>
  <hr>
  <br>
  {#each experienceItems as item}
    <ExperienceItem {...item} />
  {/each}
</section>