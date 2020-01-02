<script>
  import { headerText } from '../data.js';
  const { name, profession } = headerText;
</script>

<header>
  <div class="header__picture">
    <img src="me.jpg" alt="me" />
  </div>
  <div class="header__info">
    <h1>{name}</h1>
    <h2>{profession}</h2>
  </div>
</header>

<style>
	header {
		height: 163px;
		background: #333;
    color: white;
    display: flex;
  }

  .header__picture {
    padding: 3em 2em;
  }

  .header__info {
    padding-top: 3.5em;
  }

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: relative;
  }

  h2 {
    margin-top: .5em;
    color: #ccc;
  }
</style>