<script lang="ts">
  import welcome from "$lib/images/welcome.webp";
  import welcomeFallback from "$lib/images/welcome.png";
</script>

<header class="copy px-4 py-8 md:p-8">
  <a href="/">
    <img src={welcomeFallback} alt="home-page banner" />
  </a>

  <nav>
    <ul>
      <li><a href="/post">Post</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: block;
    height: 100px;
    padding: 10px 3px 5px 3px;
    background: #fff;
    border-bottom: 1px solid #0f03ed;
  }

  header img {
    display: block;
    padding: 10px;
    margin: 5px 5px 5px 5px;
    width: 400px;
    height: auto;
    float: left;
  }

  nav {
    display: block;
    float: right;
    width: 500px;
    margin-top: 30px;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    display: inline;
  }

  nav li a {
    padding: 10px 15px;
    margin: 0 10px;
    text-decoration: none;
  }
</style>
