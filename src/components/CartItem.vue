<template>
  <div v-for="item in cart" :key="item.product.id" class="outer-card">
    <router-link
      :to="{
        name: 'ProductDetails',
        params: { gender: item.product.gender, id: item.product.id },
      }"
      class="cart-item"
    >
      <img :src="item.product.src" />
      <div class="detais">
        <h3>{{ item.product.title }}</h3>
        <div class="productDetails">
          <p class="size">{{ item.size }}</p>
          <span class="quantity">{{ item.quantity }}</span>
        </div>
        <span class="price">${{ item.quantityPrice }}</span>
      </div>
      <div class="cancel">
        <i
          class="uil uil-times"
          @click.prevent="removeProductFromCart(item.product)"
        ></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
  },
};
</script>

<style scoped>
.outer-card {
  width: 100%;
  border-top: solid 1px black;
}
.outer-card:first-child {
  border-top: 0;
}

.cart-item {
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  padding: 1em 0.8em;
  overflow-x: hidden;
  text-decoration: none;
  color: black;
  height: 50%;
  transition: 0.5s;
}
.cart-item:hover {
  background-color: gray;
}

.cart-item img {
  position: relative;
  width: 5vw;
  height: 12vh;
  display: block;
  left: 0;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
}
.cart-item h3 {
  display: flex;
  position: relative;
  align-self: left;
  letter-spacing: 0.05em;
  width: auto;
  margin: 0;
  padding-left: 1em;
  font-size: 0.9em;
  color: black;
  text-transform: uppercase;
  font-family: "Tahoma";
  text-shadow: 0.1px 0.1px 0.1px gray;
  transition: 0.5s;
}
.cart-item h3:hover {
  color: wheat;
}
.cart-item .price {
  display: flex;
  justify-content: right;
  margin-top: 0.5em;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  color: green;
  font-family: "Tahoma";
  font-weight: 800;
}

.cart-item .productDetails {
  display: flex;
  flex-direction: row;
}
.cart-item .productDetails .size {
  display: block;
  text-transform: uppercase;
  margin: 0.6em 1.2em;
  padding: 0.1em 0.3em;
  font-size: 0.9em;
  border-radius: 2em;
  border: 1px solid black;
  font-family: "Tahoma";
}
.cart-item .productDetails .quantity {
  display: block;
  text-transform: uppercase;
  margin: 0.6em -1em;
  padding: 0em 1em;
  font-size: 0.9em;
  border-radius: 2em;
  border: 1px solid black;
  font-family: "Tahoma";
}

.cancel {
  text-align: right;
  transform: translateY(-15%) translateX(50%);
  position: relative;
  font-size: 1.2em;
}
.cancel .uil {
  display: flex;
  position: fixed;
  cursor: pointer;
  transition: 0.5s;
}
.cancel .uil:hover {
  color: red;
}

@media screen and (max-width: 360px){

  .cart-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.3em;
  }

  .cart-item img {
    width: 17.5vw;
    height: 12vh;
  }
  .cart-item h3 {
    letter-spacing: 0.01em;
    width: 20vh;
    margin: 0;
    padding-left: 0.7em;
    font-size: 0.6em;
  }
  .cart-item .price {
    margin: 1em 1em 0 -1em;
    font-size: 1em;
    letter-spacing: 0.1em;
  }

  .cart-item .productDetails {
    flex-direction: row;
  }
  .cart-item .productDetails .size {
    margin: 0.3em 0.1em 0 0.5em;
    padding: 0.1em 0.2em;
    font-size: 0.7em;
    text-align: center;
  }
  .cart-item .productDetails .quantity {
    margin: 0.3em 0.1em 0 0.5em;
    padding: 0.1em 0.2em;
    font-size: 0.7em;
    text-align: center;
  }
  .cancel {
    transform: translateY(0%) translateX(30%);
    font-size: 1em;
  }
}

@media screen and (min-width: 360px) and (max-width: 540px){

  .cart-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.2em;
  }

  .cart-item img {
    width: 15vw;
    height: 8vh;
  }
  .cart-item h3 {
    letter-spacing: 0.01em;
    width: 17vh;
    margin: 0;
    padding-left: 0.5em;
    font-size: 0.5em;
  }
  .cart-item .price {
    margin: 1em 5em 0 1em;
    font-size: 0.9em;
    letter-spacing: 0.1em;
  }

  .cart-item .productDetails {
    flex-direction: row;
  }
  .cart-item .productDetails .size {
    margin: 0.3em 0.5em 0 0.5em;
    padding: 0.1em 1.5em;
    font-size: 0.3em;
    text-align: center;
  }
  .cart-item .productDetails .quantity {
    margin: 0.3em 0.5em 0 0.5em;
    padding: 0.1em 1.5em;
    font-size: 0.3em;
    text-align: center;
  }
  /* .cart-item .productDetails .size {
    margin: 3em 80em 0 1em;
    padding: 0.1em 4em;
    font-size: 0.1em;
    text-align: center;
  }
  .cart-item .productDetails .quantity {
    margin: 3em 80em 0 1em;
    padding: 0.1em 4em;
    font-size: 0.1em;
    text-align: center;
  } */
  .cancel {
    transform: translateY(0%) translateX(10%);
    font-size: 1.5em;
  }
}

@media screen and (min-width: 540px) and (max-width: 768px){

.cart-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.2em;
}

.cart-item img {
  width: 15vw;
  height: 12vh;
}
.cart-item h3 {
  letter-spacing: 0.01em;
  width: 25vh;
  margin: 0;
  padding-left: 0.5em;
  font-size: 0.9em;
}
.cart-item .price {
  margin: 1em 5em 0 1em;
  font-size: 0.9em;
  letter-spacing: 0.1em;
}

.cart-item .productDetails {
  flex-direction: row;
}
.cart-item .productDetails .size {
  margin: 0.3em 0.5em 0 0.5em;
  padding: 0.1em 1.5em;
  font-size: 0.7em;
  text-align: center;
}
.cart-item .productDetails .quantity {
  margin: 0.3em 0.5em 0 0.5em;
  padding: 0.1em 1.5em;
  font-size: 0.7em;
  text-align: center;
}
.cancel {
  transform: translateY(0%) translateX(70%);
  font-size: 1.5em;
}
}

@media screen and (min-width: 768px) and (max-width: 1024px){

  .cart-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.3em;
  }

  .cart-item img {
    width: 12.5vw;
    height: 10vh;
  }
  .cart-item h3 {
    letter-spacing: 0.01em;
    width: 18.5vh;
    margin: 0;
    padding-left: 0.5em;
    font-size: 1em;
  }
  .cart-item .price {
    margin: 1em 3em 0 -1em;
    font-size: 1.2em;
    letter-spacing: 0.1em;
  }

  .cart-item .productDetails {
    flex-direction: row;
  }
  .cart-item .productDetails .size {
    margin: 0.3em 0.1em 0 0.5em;
    padding: 0.1em 1em;
    font-size: 1.2em;
    text-align: center;
  }
  .cart-item .productDetails .quantity {
    margin: 0.3em 0.1em 0 0.5em;
    padding: 0.1em 1em;
    font-size: 1.2em;
    text-align: center;
  }
  .cancel {
    transform: translateY(0%) translateX(-0%);
    font-size: 1.75em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (max-height: 1366px){

.cart-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.3em;
}

.cart-item img {
  width: 12.5vw;
  height: 22.5vh;
}
.cart-item h3 {
  letter-spacing: 0.01em;
  width: 45vh;
  margin: 0;
  padding-left: 0.5em;
  font-size: 1.2em;
}
.cart-item .price {
  margin: 1em 2em 0 2em;
  font-size: 1.5em;
  letter-spacing: 0.1em;
}

.cart-item .productDetails {
  flex-direction: row;
}
.cart-item .productDetails .size {
  margin: 0.3em 0.1em 0 0.5em;
  padding: 0.1em 0.5em;
  font-size: 1em;
  text-align: center;
}
.cart-item .productDetails .quantity {
  margin: 0.3em 0.1em 0 0.5em;
  padding: 0.1em 0.5em;
  font-size: 1em;
  text-align: center;
}
.cancel {
  transform: translateY(0%) translateX(20%);
  font-size: 1.75em;
}
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (min-height: 1366px){

  .cart-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.3em;
  }

  .cart-item img {
    width: 12vw;
    height: 10vh;
  }
  .cart-item h3 {
    letter-spacing: 0.01em;
    width: 17.5vh;
    margin: 0;
    padding-left: 0.5em;
    font-size: 1.1em;
  }
  .cart-item .price {
    margin: 1em 1em 0 -1em;
    font-size: 1.5em;
    letter-spacing: 0.1em;
  }

  .cart-item .productDetails {
    flex-direction: row;
  }
  .cart-item .productDetails .size {
    margin: 0.3em 0.1em 0 0.5em;
    padding: 0.1em 1em;
    font-size: 1.2em;
    text-align: center;
  }
  .cart-item .productDetails .quantity {
    margin: 0.3em 0.1em 0 0.5em;
    padding: 0.1em 0.5em;
    font-size: 1.2em;
    text-align: center;
  }
  /* .cart-item .productDetails .size {
    margin: 0.3em 8em 0 1em;
    padding: 0.1em 1.2em;
    font-size: 1em;
    text-align: center;
  }
  .cart-item .productDetails .quantity {
    margin: 0.3em 8em 0 1em;
    padding: 0.1em 1.2em;
    font-size: 1em;
    text-align: center;
  } */
  .cancel {
    transform: translateY(0%) translateX(60%);
    font-size: 1.75em;
  }
}
</style>
