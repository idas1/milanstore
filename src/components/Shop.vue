<template>
  <div class="shop-page">
    <div class="gradient-section">
      <!-- <h1 class="shop-title">{{ category }}</h1> -->
      <h1 class="shop-title">Welcome to <span>AC Milan</span></h1>
    </div>
    <img class="hero-image" :src="require(`@/assets/img/${image}`)" />
    <div class="shop-section">
      <div v-for="p in product" :key="p.id" class="outer-card">
        <router-link
          :to="{
            name: 'ProductDetails',
            params: { gender: p.gender, id: p.id },
          }"
          class="card"
        >
          <img class="card-image" :src="p.src" />
          <div class="card-bottom">
            <div class="card-text">
              <p class="item-title">{{ p.title }}</p>
              <p class="item-description">{{ p.description }}</p>
            </div>
          </div>
        </router-link>
        <div class="card-under">
          <p class="item-price">${{ p.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "image", "catImg", "category"],
  name: "Shop",
};
</script>

<style scoped>
.shop-page {
  position: absolute;
  top: 0;
  z-index: -10;
  background: black;
}
.gradient-section {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 70em;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  text-align: center;
  justify-content: center;
  align-content: center;
}
.shop-title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.1em;
  font-weight: 800;
  text-indent: 0.3em;
  font-size: 3.5em;
  color: rgb(229, 30, 30);
  text-transform: uppercase;
  font-family: "Tahoma";
}

.shop-title span{
  display: block;
  font-size: 3em;
}
.hero-image {
  position: relative;
  width: 100vw;
  height: 56em;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: center;
  animation: fade-in 0.5s forwards;
}
.shop-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 1em;
  justify-content: center;
  height: auto;
  width: 100vw;
  padding: 0.5em 0em 5em 0em;
  background-color: black;
}
.outer-card {
  position: relative;
  transition: transform 0.3s;
  cursor: pointer;
  border: 0px solid red;
  overflow: hidden;
  width: 20em;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20em;
  height: 25em;
  cursor: pointer;
  border: none;
  border-bottom: inherit;
  overflow: hidden;
  transition: transform 0.3s;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  text-decoration: none;
}

.outer-card:hover {
  transform: translateY(-0.1em);
}

.outer-card:hover > .card > .card-bottom {
  opacity: 1;
}

.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.3s;
  filter: brightness(80%);
}

.outer-card:hover > .card > .card-image {
  transform: scale(1.05);
  opacity: 0.8;
}

.card-bottom:hover > .card-image {
  transform: scale(1.05);
}

.card-bottom {
  display: flex;
  flex-direction: column;
  justify-self: center;
  position: relative;
  background: black;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 20em;
  height: 10em;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s;
  justify-content: center;
}

.card-text {
  padding: 1em 2em 1em 2em;
  font-size: 1rem;
  word-wrap: break-word;
  text-align: left;
  align-self: center;
}

.card-text > .item-title {
  font-size: 1.2em;
  font-weight: 800;
  padding-bottom: 0.5em;
  color: red;
}

.card-text > .item-description {
  font-size: 0.85em;
  color: gray;
}

.card-under {
  padding: 0.5em 0.5em;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  width: auto;
  background-color: black;
  border: none;
  border-top: none;
  transition: all 0.3s;
  color: white;
}

.outer-card:hover > .card-under {
  background-color: rgb(229, 30, 30);
  color: black;
  border-bottom-right-radius: 0.75em;
  border-bottom-left-radius: 0.75em;
}

.card-under > .item-price {
  display: flex;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.1em;
  opacity: 0.9;
  margin-left: 0.5em;
}

@media screen and (max-width: 360px){

  .gradient-section{
    width: 100%;
  }
  .hero-image {
    width: 120vw;
    height: 30em;
  }
  .outer-card {
    width: 20em;
    left: 8.5%;
  }
  .card {
    padding-top: 5vh;
    width: 20em;
    height: 18em;
    border-top: 2px solid red;
  }
  .shop-title {
    letter-spacing: 0.01em;
    font-size: 1em;
    opacity: 0.7;
    padding-bottom: 80vh;
  }
  .shop-title span{
    display: block;
    font-size: 3.5em;
    padding-top: 0.01em;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .hero-image {
    width: 100vw;
    height: 30em;
  }
  .shop-title {
    letter-spacing: 0.01em;
    font-size: 2em;
    opacity: 0.7;
    padding-bottom: 70vh;
  }
  .shop-title span{
    display: block;
    font-size: 2em;
    padding-top: 0.1em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .hero-image {
    width: 100vw;
    height: 50em;
  }
  .shop-title {
    letter-spacing: 0.01em;
    font-size: 2.5em;
    opacity: 0.7;
    padding-bottom: 0vh;
  }
  .shop-title span{
    display: block;
    font-size: 3em;
    padding-top: 0.01em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
  .shop-title {
    letter-spacing: 0.01em;
    font-size: 3em;
    opacity: 0.7;
    margin-top: -5em;
  }
  .shop-title span{
    display: block;
    font-size: 3em;
    padding-top: 0.1em;
  }
}
</style>
