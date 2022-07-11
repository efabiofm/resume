<script>
  import Icon from 'fa-svelte';
  import ExperienceItem from './ExperienceItem.svelte';
  import { experienceItems } from '../../data.js';

  const list = experienceItems.slice(0, experienceItems.length - 1);
</script>

<section>
  <h2 class="text--uppercase">Work Experience</h2>
  {#each list as item}
    <ExperienceItem {...item} />
  {/each}
</section>