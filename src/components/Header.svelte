<script>
  const photo = 'me.jpg';
  const name = 'Fabio Flores Manrique';
  const profession = 'Full-Stack Web Developer';
</script>

<header>
  <img src={photo} alt="Profile Picture" />
  <div>
    <h1>{name}</h1>
    <h2>{profession}</h2>
  </div>
</header>

<style>
	header {
		height: 200px;
		background: #333;
    color: white;
    display: flex;
  }
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
</style>