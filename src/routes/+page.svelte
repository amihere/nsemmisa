<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Ask away... " />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Ask" />
			</picture>
		</span>
	</h1>

  <span>
    <input type="text" name="search" id="search">
  </span>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

  #search {
    padding: 10px 20px;
    border: none;
    margin: 5px;
    font-size: 15px;
    border-radius: 4px;
    outline: none;
    margin-top: 30px;
  }

  #search:hover {
    border: 1px solid #fcfcfc;
  }
</style>
