<script>
  import EducationItem from './EducationItem.svelte';
  import { educationItems } from '../../data.js';
</script>

<section>
  <h2>Education</h2>

  {#each educationItems as item}
    <EducationItem {...item} />  
  {/each}
</section>