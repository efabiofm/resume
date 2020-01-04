<script>
  import Icon from 'fa-svelte';
  import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
  import ExperienceItem from './ExperienceItem.svelte';
  import { experienceItems } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faBriefcase} />
    <span>&nbsp;Experience</span>
  </h2>
  <hr>
  <br>
  {#each experienceItems as item}
    <ExperienceItem {...item} />
  {/each}
</section>