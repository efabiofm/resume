<script>
	import Header from './components/Header.svelte';
	import Contact from './components/Contact.svelte';
	import Aside from './components/aside/Aside.svelte';
	import Content from './components/content/Content.svelte';
</script>

<main>
	<Header />
	<Contact />
	<div class="resume__body">
		<Aside />
		<Content />
	</div>
</main>

<style>
	.resume__body {
		display: flex;
	}
</style>
