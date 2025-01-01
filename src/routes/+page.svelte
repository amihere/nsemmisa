<script lang="ts">
	import welcome from '$lib/images/welcome.webp';
	import welcomeFallback from '$lib/images/welcome.png';
  import PreFooter from '$lib/PreFooter.svelte';
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
				<img src={welcomeFallback} alt="home-page banner" />
			</picture>
		</span>
	</h1>

  <div id="searchbox">
    <input class="searchInput" type="text" name="search" id="search">
  </div>
  <PreFooter />
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
    min-height: 20px;
    height: auto;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: auto;
		top: 0;
		display: block;
	}

  #searchbox{
    width: 100%;
  }

  #search {
    width: 60%;
    padding: 10px 20px;
    border: 1px solid #909090;
    font-size: 15px;
    border-radius: 4px;
    outline: none;
    margin-top: 30px;
  }

  .searchInput {
    margin: auto;
    display: block;
  }

  #search:hover {
    border: 1px solid #c0c0c0;
  }
</style>
