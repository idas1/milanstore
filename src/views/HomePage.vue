<template>
  <div class="home">
    <div class="gradient" />
    <video autoplay loop muted plays-inline class="hero">
      <source src="@/assets/videos/video.mp4" type="video/mp4" />
    </video>
    <div class="buttons">
      <router-link class="nav-button" to="/store"
        ><button class="home-button">Store</button>
      </router-link>
      <router-link class="nav-button" to="/about"
        ><button class="home-button">About</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-position: top;
  position: relative;
}
.home-button {
  display: block;
  transition: 0.5s;
  border: none;
  background-color: black;
  color: white;
  padding: 1em 2em;
  justify-self: center;
  font-size: 1.2rem;
  font-family: "Tahoma";
  width: 15em;
  position: relative;
  cursor: pointer;
  border-radius: 1em;
}
.home-button:hover {
  background-color: rgb(229, 30, 30);
  color: black;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 5em;
}
.buttons {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.nav-button {
  display: flex;
  align-self: center;
  text-align: center;
  margin: 1em;
  position: relative;
  height: 3em;
  padding: 1em;
  text-decoration: none;
  flex-direction: column;
}
.gradient {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
}
.hero {
  position: fixed;
  bottom: 0;
  z-index: -5;
  min-width: 100%;
  min-height: 100%;
  animation: fade-in 1.3s forwards;
  justify-content: center;
  align-content: center;
  object-position: top;
}

@media screen and (max-width: 360px){
  .home {
    width: 100%;
    height: 100%;
  }
  .home-button {
    font-size: 0.7em;
    width: 16em;
    background-color: gray;
    color: whitesmoke;
  }
  .buttons {
    margin-top: 100%;
    /* padding-top: 70%; */
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .nav-button {
    display: flexbox;
    margin: 0.1em;
    padding: 0.1em;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .home {
    width: 100%;
    height: 100%;
  }
  .home-button {
    font-size: 1.3em;
    width: 16em;
    background-color: gray;
    color: whitesmoke;
  }
  .buttons {
    margin-top: 70%;
    /* padding-top: 70%; */
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .nav-button {
    display: flexbox;
    margin: 0.1em;
    padding: 1em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .home {
    width: 100%;
    height: 100%;
  }
  .home-button {
    font-size: 2.5em;
    width: 16em;
    background-color: gray;
    color: whitesmoke;
  }
  .buttons {
    margin-top: 55%;
    /* padding-top: 70%; */
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .nav-button {
    display: flexbox;
    margin: 2em;
    padding: 1em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (max-height: 1366px){
  .home {
    width: 100%;
    height: 100%;
  }
  .home-button {
    font-size: 1.2em;
    width: 15em;
    background-color: gray;
    color: whitesmoke;
  }
  .buttons {
    margin-top: 30%;
    /* padding-top: 70%; */
    height: auto;
    display: flex;
    flex-direction: row;
  }
  .nav-button {
    display: flexbox;
    margin: 1em;
    padding: 0.5em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (min-height: 1366px){
  .home {
    width: 100%;
    height: 100%;
  }
  .home-button {
    font-size: 1.6em;
    width: 35em;
    background-color: gray;
    color: whitesmoke;
  }
  .buttons {
    margin-top: 50%;
    /* padding-top: 70%; */
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .nav-button {
    display: flexbox;
    margin: 2em;
    padding: 0.5em;
  }
}
</style>
