<script>
  import ProjectItem from './ProjectItem.svelte';
  import { projectItems } from '../../data.js';
</script>

<section>
  <h2 class="text--uppercase">Main Projects</h2>
  {#each projectItems as item}
    <ProjectItem {...item} />
  {/each}
</section>