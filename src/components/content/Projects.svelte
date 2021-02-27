<script>
  import ProjectItem from './ProjectItem.svelte';
  import { projectItems } from '../../data.js';
</script>

<section class="mt-6">
  <h2 class="text--uppercase">Main Projects</h2>
  {#each projectItems as item}
    <ProjectItem {...item} />
  {/each}
</section>