<script>
  import Skills from './Skills.svelte';
  import Education from './Education.svelte';
  import Languages from './Languages.svelte';
  import ExperienceItem from '../aside/ExperienceItem.svelte';
  import { experienceItems } from '../../data';

  const lastItem = experienceItems.slice(experienceItems.length - 1)[0];
</script>

<section class="column-right">
  <ExperienceItem {...lastItem} />
  <Education />
  <Languages />
  <Skills />
</section>

<style>
  .column-right {
    padding: 1.5em 2em 0 1em;
  }
</style>
