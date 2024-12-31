<script lang="ts">
  import Header from '$lib/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">

	<main>
		{@render children()}
    <Header />
	</main>

	<footer>
		<p>
			visit <a href="https://kwaw.co">kwaw.co</a> to build even more impressive solutions!
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
