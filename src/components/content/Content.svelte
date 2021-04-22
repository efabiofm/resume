<script>
  import Skills from './Skills.svelte';
  import Education from './Education.svelte';
  import Projects from './Projects.svelte';
  import Languages from './Languages.svelte';
</script>

<section class="column-right">
  <Education />
  <Languages />
  <Projects />
  <Skills />
</section>

<style>
  .column-right {
    padding: 1.5em 2em 0 1em;
  }
</style>
