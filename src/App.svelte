<script>
	import Header from './components/Header.svelte';
	import Aside from './components/aside/Aside.svelte';
	import Content from './components/content/Content.svelte';
</script>

<Header />
<div class="resume__body">
	<Aside />
	<Content />
</div>

<style>
	.resume__body {
		display: flex;
	}
</style>
