<script>
  import Summary from './Summary.svelte';
  import Skills from './Skills.svelte';
  import Experience from './Experience.svelte';
  import References from './References.svelte';
</script>

<section class="content">
  <Summary />
  <div class="separator"></div>
  <Experience />
  <div class="separator"></div>
  <Skills />
  <div class="separator"></div>
  <References />
</section>

<style>
  .content {
    padding: 3em 2em 2em;
  }
</style>
