<template>
  <div class="aboutPage">
    <div class="gradient-section">
      <h1 class="title">Welcome to <span>AC Milan</span></h1>
      <p class="text">
        AC Milan was founded as Milan Foot-Ball and Cricket Club in 1899 by English expatriate Herbert Kilpin. 
        The club claims 16 December of that year as their foundation date, but historical evidence seems to suggest that the club was actually founded a few days earlier, most likely on 13 December
      </p>
    </div>
    <img class="heroAbout" src="@/assets/img/1.png" />
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped>

.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  overflow: hidden;
}
.gradient-section .title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.1em;
  font-weight: bolder;
  text-indent: 0.3em;
  font-size: 5.5rem;
  color: red;
  text-transform: uppercase;
  font-family: "Tahoma";
  margin-top: 2.5em;
  text-shadow: 1px 1px 2px black;
}
.gradient-section .text {
  position: absolute;
  align-self: center;
  text-align: center;
  font-family: "Tahoma";
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 0.05em;
  margin-top: 20em;
  padding: 1em 5em;
  text-shadow: 1px 1px 2px black;
  color: white;
}

.heroAbout {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -5;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: top;
  animation: fade-in 0.5s forwards;
  overflow: hidden;
}



@media screen and (max-width: 360px){
  .gradient-section .title {
    font-size: 1.75em;
    padding-top: 1em;
  }
  .gradient-section .title span{
    font-size: 1.5em;
    display: block;
  }
  .gradient-section .text {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin-top: 12.5em;
    padding: 0 0.7em;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px) {
  .gradient-section .title {
    font-size: 2em;
    padding-top: 2em;
  }
  .gradient-section .title span{
    font-size: 1.75em;
    display: block;
  }
  .gradient-section .text {
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin-top: 12.5em;
    padding: 0 0.7em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .gradient-section .title {
    font-size: 3em;
    padding-top: 1em;
  }
  .gradient-section .title span{
    font-size: 2em;
    display: block;
  }
  .gradient-section .text {
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin-top: 17.5em;
    padding: 0 3em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
  .gradient-section .title {
    font-size: 3em;
    padding-top: 1em;
  }
  .gradient-section .title span{
    font-size: 2.5em;
    display: block;
  }
  .gradient-section .text {
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin-top: 17.5em;
    padding: 0 5em;
  }
}

</style>
