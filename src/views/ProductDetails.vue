<template>
  <div v-if="product" class="product">
    <div class="gradient-section"></div>
    <img class="back-image" :src="product.src" />
    <div class="container">
      <div class="details">
        <h1 class="title">{{ product.title }}</h1>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <form class="cart">
          <select
            class="select"
            defaultValue="ceva"
            v-model="this.size"
            :class="{ error: error }"
          >
            <option value="Size" disabled>Size</option>
            <option value="xs">xs</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
            <option value="xxl">xxl</option>
          </select>
          <button class="cart-button" @click.prevent="addToCart()">
            Add to cart
          </button>
        </form>
      </div>
      <i class="uil uil-arrow-left" @click="$router.go(-1)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["gender", "id"],
  data() {
    return {
      size: "Size",
      product: [],
      error: false,
    };
  },
  mounted() {
    // if (this.gender == "women") {
    //   this.product = this.$store.getters.getProductByIdWomen(this.id);
    // } else {
      this.product = this.$store.getters.getProductByIdMen(this.id);
    // }
  },
  methods: {
    addToCart() {
      if (this.size != "Size") {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1,
          quantityPrice: this.product.price,
          size: this.size,
        });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
option:first-child {
  display: none;
}
.product {
  display: flex;
  position: fixed;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: black;
  right: 0;
  bottom: 0;
  left: 10em;
  z-index: -5;
}
.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 60%;
  height: 100%;
  background-image: linear-gradient(to right, transparent, black 70%);
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  left: 0;
}
.back-image {
  position: fixed;
  width: 45%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: -2;
  left: 0;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
}
.container {
  color: white;
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: center;
  width: auto;
  align-self: center;
}
.container > img {
  font-size: 2em;
  height: 32px;
  margin-left: 2em;
  cursor: pointer;
}
.details {
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0;
  /* margin-left: 10em; */
  justify-content: center;
  width: auto;
}
.details .title {
  align-self: left;
  letter-spacing: 0.2em;
  font-weight: bold;
  text-indent: 0.3em;
  width: auto;
  margin: 0;
  font-size: 2.5em;
  color: red;
  text-transform: uppercase;
  font-family: "Tahoma";
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
}
.details .price {
  margin: 15px;
  font-size: 2em;
  letter-spacing: 0.1em;
  color: green;
  font-family: "Tahoma";
  text-shadow: 1px 1px 2px black;
}
.details .description {
  font-size: 1.25em;
  width: 30em;
  text-indent: 0.5em;
  word-wrap: break-word;
  text-align: right;
  padding-bottom: 2em;
  border-bottom: 1px solid red;
  text-shadow: 1px 1px 2px black;
  font-family: "Tahoma";
}
.details .select {
  display: block;
  transition: 0.5s;
  background-color: black;
  color: rgb(255, 255, 255);
  align-self: center;
  font-size: 1.5rem;
  padding: 0.4em 0;
  margin: 0.2em;
  font-family: "Tahoma";
  width: 10vw;
  height: 2.5em;
  position: relative;
  cursor: pointer;
  border-radius:0.75em;
  text-transform: uppercase;
  border: 0.2em solid white;
  text-align: center;
}

.details .select > option {
  text-align: center;
}
.details .select.error {
  background-color: rgb(255, 0, 0);
  color: black;
  border: 2px solid black;
  text-align: center;
  font-weight: bold;
  font-style: italic;
}
.details .cart {
  display: flex;
  flex-direction: row;
  color: white;
}
.details .cart-button {
  display: block;
  transition: 0.5s;
  background-color: black;
  color: rgb(255, 255, 255);
  align-self: center;
  font-size: 1.5rem;
  padding: 0.4em 0;
  margin: 0.2em;
  font-family: "Tahoma";
  width: 15vw;
  height: 2.5em;
  position: relative;
  cursor: pointer;
  border-radius: 0.75em;
  text-transform: uppercase;
  border: 0.2em solid white;
  appearance: none;
}
.details .cart-button:hover {
  background-color: rgb(229, 30, 30);
  color: rgb(0, 0, 0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  border: 0.1em solid black;
}
.uil {
  margin-left: 1em;
  font-size: 2.5em;
  color: white;
  justify-self: center;
  cursor: pointer;
}

@media screen and (max-width: 360px) {
  .details .title {
    letter-spacing: 0.1em;
    font-weight: bold;
    text-indent: 1em;
    font-size: 1.2em;
  }
  .details .price {
    margin: 1em;
    font-size: 1em;
    text-indent: 0.1em;
  }
  .details .description {
    font-size: 1em;
    width: 10em;
    text-indent: 2em;
    text-align: left;
    padding-bottom: 1em;
  }
  .details .select {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 0 0.5em;
    width: 25vw;
    height: 3.5em;
  }
  .details .cart-button {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 1em;
    width: 30vw;
    height: 3.5em;
    border-radius: 0.75em;
    appearance: none;
  }
  .uil {
    margin-right: 15em;
    font-size: 1.2em;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .details .title {
    letter-spacing: 0.1em;
    font-weight: bold;
    text-indent: 1em;
    font-size: 1.2em;
  }
  .details .price {
    margin: 1em;
    font-size: 1em;
    text-indent: 0.1em;
  }
  .details .description {
    font-size: 1em;
    width: 50vw;
    text-indent: 2em;
    text-align: left;
    padding-bottom: 1em;
  }
  .details .select {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 0 0.5em;
    width: 17.5vw;
    height: 3.5em;
  }
  .details .cart-button {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 1em;
    width: 25vw;
    height: 3.5em;
    border-radius: 0.75em;
    appearance: none;
  }
  .uil {
    margin:0 10em 0 1em;
    font-size: 1.5em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .details .title {
    letter-spacing: 0.1em;
    font-weight: bold;
    text-indent: 1em;
    font-size: 2em;
  }
  .details .price {
    margin: 1em;
    font-size: 1.75em;
    text-indent: 1em;
  }
  .details .description {
    font-size: 1em;
    width: 25em;
    text-indent: 5em;
    text-align: left;
    padding-bottom: 1em;
  }
  .details .select {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 0 0.5em 0 3.5em;
    width: 12.5vw;
    height: 3em;
  }
  .details .cart-button {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 1em;
    width: 20vw;
    height: 3em;
    border-radius: 0.75em;
    appearance: none;
  }
  .uil {
    margin: 0 4.5em 0 1em;
    font-size: 2.5em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){

  .details .title {
    letter-spacing: 0.1em;
    font-weight: bold;
    text-indent: 0.1em;
    font-size: 2.5em;
  }
  .details .price {
    margin: 1em;
    font-size: 1.5em;
    text-indent: 0.5em;
  }
  .details .description {
    font-size: 1em;
    width: 30em;
    text-indent: 3em;
    text-align: left;
    padding-bottom: 1em;
  }
  .details .select {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 0 0.5em;
    width: 12.5vw;
    height: 3em;
  }
  .details .cart-button {
    font-size: 1em;
    padding: 0.4em 0;
    margin: 1em;
    width: 20vw;
    height: 3em;
    border-radius: 0.75em;
    appearance: none;
  }
  .uil {
    margin:0 1em;
    font-size: 3em;
  }
}
</style>
