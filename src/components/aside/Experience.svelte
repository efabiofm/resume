<script>
  import Icon from 'fa-svelte';
  import ExperienceItem from './ExperienceItem.svelte';
  import { experienceItems } from '../../data.js';
</script>

<section>
  <h2 class="text--uppercase">Work Experience</h2>
  {#each experienceItems as item}
    <ExperienceItem {...item} />
  {/each}
</section>