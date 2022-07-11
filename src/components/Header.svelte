<script>
  import { headerText } from '../data.js';
  const { name, profession, description } = headerText;
</script>

<header>
  <div class="header__info">
    <h1>{name}</h1>
    <h2>{profession}</h2>
    <p class="description">{description}</p>
  </div>
  <div class="header__picture">
    <img src="me.jpg" alt="me" />
  </div>
</header>

<style>
	header {
		background: #374458;
    color: white;
    display: flex;
    padding: 2em 2em 1em 2em;
  }

  .header__info > h1,
  .header__info > h2 {
    font-weight: normal;
  }

  img {
    border-radius: 50%;
    width: 110px;
    height: 110px;
    position: relative;
    border: 5px solid #4f90cd;
  }

  h1 {
    font-size: 33px;
  }

  h2 {
    color: #4f90cd;
    margin-bottom: .5em;
  }

  .description {
    padding-right: 1em;
  }
</style>