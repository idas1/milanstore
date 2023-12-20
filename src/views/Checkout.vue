<template>
  <div class="search-page">
    <div class="gradient-section">
      <h1 class="search-title">Checkout</h1>
    </div>
    <img class="hero-image" src="@/assets/img/2.png" />
    <div class="section">
      <orderSuccess v-if="order" />
      <!-- if checkout = true -->
      <div class="card-section" v-if="!order">
        <!-- if checkout = false -->
        <div v-for="item in getCart" :key="item.product.id" class="outer-card">
          <router-link
            :to="{
              name: 'ProductDetails',
              params: { gender: item.product.gender, id: item.product.id },
            }"
            class="card"
          >
            <img class="card-image" :src="item.product.src" />
            <div class="card-text">
              <p class="item-title">{{ item.product.title }}</p>
              <p class="item-quantity">Quantity: {{ item.quantity }}</p>
              <div class="item-size-text">
                Size
                <p class="item-size">: {{ item.size }}</p>
              </div>
              <p class="item-price">${{ item.quantityPrice }}</p>
            </div>
          </router-link>
          <div class="cancel">
            <i
              class="uil uil-trash-alt"
              @click.prevent="removeProductFromCart(item.product)"
            ></i>
          </div>
        </div>
      </div>
      <div class="checkout-card">
        <div class="header-checkout">
          <p class="checkout-title">ORDER SUMMARY</p>
        </div>
        <div class="body-checkout">
          <p class="text-box">Subtotal : ${{ cartTotalPrice }}</p>
          <p class="text-box">Shipping : ${{ getShipping }}</p>
          <p class="text-box">Tax: {{ getTax }}%</p>
          <p class="text-total">Total: ${{ cartCheckoutPrice }}</p>
        </div>
        <div class="footer-checkout" to="/checkout">
          <div class="checkout" @click.prevent="orderSuccess()">Checkout</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderSuccess from "@/components/orderSuccess.vue";
import { mapGetters } from "vuex";
export default {
  components: { orderSuccess },
  name: "Checkout",
  data() {
    return {
      order: false,
    };
  },
  computed: {
    ...mapGetters([
      "cartTotalPrice",
      "cartCheckoutPrice",
      "getTax",
      "getShipping",
      "getCart",
    ]),
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    orderSuccess() {
      if (this.getCart.length > 0) {
        this.order = true;
        this.$store.dispatch("orderSuccess");
      } else if ((this.getCart.length = 0)) {
        this.order = false;
      }
    },
  },
};
</script>

<style scoped>
.search-page {
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: black;
  height: 100%;
}

.gradient-section {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  text-align: center;
  justify-content: center;
  align-content: center;
}

.search-title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.1em;
  font-weight: bolder;
  text-indent: 0.3em;
  font-size: 5em;
  color: white;
  text-transform: uppercase;
  font-family: "Tahoma";
}

.hero-image {
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: center;
  animation: fade-in 0.5s forwards;
}

.section {
  display: flex;
  background-color: black;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.checkout-card {
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: fit-content;
  background-color: wheat;
  border-radius: 1em;
  align-items: center;
  margin: 1em 1em;
  border: 4px solid red;
  padding-top: 10px;
}
.checkout-card .header-checkout {
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  align-self: center;
  width: 20vw;
  height: fit-content;
  border-radius: 1em 1em 1em 1em;
  justify-content: center;
  border-bottom: 3px solid black;
  background-color: rgb(229, 30, 30);
}
.checkout-card .header-checkout .checkout-title {
  position: relative;
  font-family: "Tahoma";
  font-size: 1.5em;
  width: 30vw;
  height: fit-content;
  margin: 1em 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.checkout-card .body-checkout {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.checkout-card .body-checkout .text-box {
  position: relative;
  font-family: "Tahoma";
  font-size: 1em;
  width: 15vw;
  height: fit-content;
  padding: 1em 0em;
  margin: 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.checkout-card .body-checkout .text-total {
  position: relative;
  font-family: "Tahoma";
  font-size: 1.5em;
  /* width: 10vw; */
  padding: 1.5em 0em;
  margin: 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.checkout-card .footer-checkout {
  position: relative;
  bottom: 0;
  /* width: 100%; */
  display: flex;
  align-self: center;
  width: 15vw;
  height: 5vh;
  /* border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  border-radius: 2em 2em 1em 1em; */
  justify-content: center;
  border-top: 1px solid black;
  background-color: wheat;
  border: none;
}
.checkout-card .footer-checkout .checkout {
  display: block;
  transition: 0.5s;
  border: none;
  background-color: black;
  color: white;
  padding: 1em 2em;
  align-self: center;
  text-align: center;
  bottom: -5px;
  font-size: 1em;
  font-family: "Tahoma";
  width: 7vw;
  position: absolute;
  cursor: pointer;
  border-radius: 2em;
  margin-bottom: 1em;
}

.checkout-card .footer-checkout .checkout:hover{
  background-color: red;
  color: black;
  font-weight: bold;
  /* text-decoration: underline; */
  font-style: italic;
  transition: 3ms;
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 60vw;
  padding: 0.5em 0em 5em 0em;
  background-color: black;
}
.card-section .outer-card {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.6s;
  cursor: pointer;
  overflow: hidden;
}

.card-section .outer-card:first-child {
  border-top: 0.1em solid red;
}

.card-section .outer-card .card {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 55vw;
  height: 15vh;
  background: gray;
  cursor: pointer;
  border: none;
  border-bottom: inherit;
  overflow: hidden;
  transition: transform 0.6s;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  text-decoration: none;
  padding: 2.5em 0em;
  border-bottom: 2px solid gray;
}

.outer-card:hover {
  transform: translateX(-0.5%);
}

.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.6s;
  filter: brightness(80%);
  position: relative;
  width: 10vw;
  height: 20vh;
  padding: 4em 1em;
}

.outer-card:hover > .card > .card-image {
  transform: scale(1.05);
}

.card-text {
  display: flex;
  flex-direction: column;
  padding: 1em 4em 1em 2em;
  font-size: 1.5em;
  word-wrap: break-word;
  text-align: left;
  align-self: right;
  color: white;
  width: 50vw;
}
.card-text > .item-title {
  font-size: 1.2em;
  font-weight: 800;
  color: gray;
  margin: 0;
  margin-bottom: 1.5em;
}

.card-text > .item-quantity {
  margin: 0;
  font-size: 0.8em;
  font-weight: 600;
  color: white;
  font-family: "Tahoma";
  letter-spacing: 0.1em;
  text-shadow: 2px 4px 2px black;
}
.card-text > .item-size-text {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 110px;
  font-size: 0.9rem;
  color: gray;
  font-family: "Tahoma";
}
.card-text .item-size-text .item-size {
  font-size: 0.9rem;
  color: gray;
  font-family: "Tahoma";
  text-transform: uppercase;
}
.card-text > .item-price {
  display: flex;
  justify-content: left;
  margin-top: 1.2em;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  color: white;
  font-family: "Tahoma";
  font-weight: 800;
  color: red;
}

.cancel {
  transform: translateY(80%) translateX(-40%);
  position: absolute;
  right: 0;
  z-index: 3;
  font-size: 1.75em;
}
.cancel .uil {
  display: flex;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  color: white;
}
.cancel .uil:hover {
  color: red;
}

@media screen and (max-width: 360px){
  .search-title {
    text-indent: 0.1em;
    font-size: 1em;
    padding-top: 3.5em;
    opacity: 0.7;
  }

  .checkout-card {
    width: 37.5vw;
    /* padding-top: 10px; */
  }
  .checkout-card .header-checkout {
    width: 25vw;
  }
  .checkout-card .header-checkout .checkout-title {
    font-size: 0.6em;
    width: 20vw;
    margin: 0.1em 0;
  }

  .checkout-card .body-checkout {
    width: 100%;
    margin: 0;
    padding: 0.1em;
  }
  .checkout-card .body-checkout .text-box {
    font-size: 0.7em;
    width: 20vw;
    padding: 0.6em 0em;
    margin: 0;
  }
  .checkout-card .body-checkout .text-total {
    font-size: 0.9em;
    /* width: 10vw; */
    padding: 1em 0em 0.5em 1em;
    margin: 0;
  }
  .checkout-card .footer-checkout .checkout {
    font-size: 0.5em;
    width: 12.5vw;
    border-radius: 2em;
    margin-bottom: 1em;
  }

  .card-section {
    width: 60vw;
    padding: 1em 0em 5em 0em;
  }


  .card-section .outer-card .card {
    width: 45vw;
    height: 20vh;
    padding: 1em 0em;
  }

  .card-image {
    filter: brightness(75%);
    width: 15vw;
    height: 20vh;
    padding: 0em 0.3em;
  }

  .card-text {
    padding: 0.1em;
    font-size: 0.4em;
  }
  .card-text > .item-title {
    font-size: 2.25em;
    margin-bottom: 2em;
  }

  .card-text > .item-quantity {
    font-size: 1em;
    letter-spacing: 0.1em;
  }
  .card-text > .item-size-text {
    bottom: 37.5%;
    font-size: 1.5em;
  }
  .card-text .item-size-text .item-size {
    font-size: 1em;
  }
  .card-text > .item-price {
    margin-top: 1em;
    font-size: 1.75em;
  }
  .cancel .uil {
    font-size: 0.3em;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .search-title {
    text-indent: 0.1em;
    font-size: 3em;
    padding-top: 5.5em;
    opacity: 0.7;
  }
  .section {
    height: 90vh;
  }

  .checkout-card {
    width: 30vw;
    /* padding-top: 10px; */
  }
  .checkout-card .header-checkout {
    width: 20vw;
    height: 5vh;
  }
  .checkout-card .header-checkout .checkout-title {
    font-size: 0.5em;
    width: 100vw;
    margin: 0.5em 0;
  }

  .checkout-card .body-checkout {
    width: 100%;
    margin: 0;
    padding: 0.5em;
  }
  .checkout-card .body-checkout .text-box {
    font-size: 0.7em;
    width: 30vw;
    padding: 0.4em 0em;
    margin: 0;
  }
  .checkout-card .body-checkout .text-total {
    font-size: 1em;
    /* width: 10vw; */
    padding: 1.5em 0em 1em 0em;
    margin: 0;
  }
  .checkout-card .footer-checkout .checkout {
    font-size: 0.7em;
    width: 15vw;
    border-radius: 2em;
    margin-bottom: 1em;
  }

  .card-section {
    width: 60vw;
    padding: 1em 0em 5em 0em;
  }


  .card-section .outer-card .card {
    width: 55vw;
    height: 15vh;
    padding: 1em 0em;
  }

  .card-image {
    filter: brightness(75%);
    width: 15vw;
    height: 17.5vh;
    padding: 4em 1em;
  }

  .card-text {
    padding: 0.1em;
    font-size: 0.5em;
  }
  .card-text > .item-title {
    font-size: 1.5em;
    margin-bottom: 4em;
  }

  .card-text > .item-quantity {
    font-size: 0.5em;
    letter-spacing: 0.1em;
  }
  .card-text > .item-size-text {
    bottom: 50%;
    font-size: 1em;
  }
  .card-text .item-size-text .item-size {
    font-size: 1em;
  }
  .card-text > .item-price {
    margin-top: 1em;
    font-size: 1.5em;
  }

  .cancel .uil {
    font-size: 0.5em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .search-title {
    text-indent: 0.1em;
    font-size: 5em;
    padding-top: 5.5em;
    opacity: 0.7;
  }
  .section {
    height: 80vh;
  }

  .checkout-card {
    width: 40vw;
    /* padding-top: 10px; */
  }
  .checkout-card .header-checkout {
    width: 30vw;
  }
  .checkout-card .header-checkout .checkout-title {
    font-size: 1.5em;
    width: 30vw;
    margin: 0.5em 0;
  }

  .checkout-card .body-checkout {
    width: 100%;
    margin: 0;
    padding: 1em;
  }
  .checkout-card .body-checkout .text-box {
    font-size: 1.2em;
    width: 40vw;
    padding: 0.5em 0em;
    margin: 0;
  }
  .checkout-card .body-checkout .text-total {
    font-size: 2em;
    /* width: 10vw; */
    padding: 1.5em 0em;
    margin: 0;
  }
  .checkout-card .footer-checkout .checkout {
    font-size: 1.2em;
    width: 15vw;
    border-radius: 2em;
    margin-bottom: 1em;
  }

  .card-section {
    width: 60vw;
    padding: 1em 0em 5em 0em;
  }


  .card-section .outer-card .card {
    width: 55vw;
    height: 20vh;
    padding: 1em 0em;
  }

  .card-image {
    filter: brightness(75%);
    width: 15vw;
    height: 15vh;
    padding: 4em 1em;
  }

  .card-text {
    padding: 0.1em;
    font-size: 1.2em;
  }
  .card-text > .item-title {
    font-size: 1.3em;
    margin-bottom: 2em;
  }

  .card-text > .item-quantity {
    font-size: 1em;
    letter-spacing: 0.1em;
  }
  .card-text > .item-size-text {
    bottom: 45%;
    font-size: 1em;
  }
  .card-text .item-size-text .item-size {
    font-size: 1em;
  }
  .card-text > .item-price {
    margin-top: 0.2em;
    font-size: 1.4em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (max-height: 1366px){
  .search-title {
    text-indent: 0.1em;
    font-size: 7em;
    padding-top: 3.5em;
    opacity: 0.7;
  }
  .section {
    height: 100vh;
  }
  .checkout-card {
    width: 40vw;
    /* padding-top: 10px; */
  }
  .checkout-card .header-checkout {
    width: 30vw;
  }
  .checkout-card .header-checkout .checkout-title {
    font-size: 1.5em;
    width: 30vw;
    margin: 0.5em 0;
  }

  .checkout-card .body-checkout {
    width: 100%;
    margin: 0;
    padding: 1em;
  }
  .checkout-card .body-checkout .text-box {
    font-size: 1.2em;
    width: 40vw;
    padding: 0.5em 0em;
    margin: 0;
  }
  .checkout-card .body-checkout .text-total {
    font-size: 2em;
    /* width: 10vw; */
    padding: 1.5em 0em;
    margin: 0;
  }
  .checkout-card .footer-checkout .checkout {
    font-size: 1.2em;
    width: 15vw;
    border-radius: 2em;
    margin-bottom: 1em;
  }

  .card-section {
    width: 60vw;
    padding: 1em 0em 5em 0em;
  }
  .card-section .outer-card .card {
    width: 55vw;
    height: 20vh;
    padding: 1.2em 0em;
  }

  .card-image {
    filter: brightness(75%);
    width: 15vw;
    height: 22.5vh;
    padding: 4em 1em;
  }

  .card-text {
    padding: 1em;
    font-size: 1.2em;
  }
  .card-text > .item-title {
    font-size: 1.3em;
    margin-bottom: 2em;
  }

  .card-text > .item-quantity {
    font-size: 0.7em;
    letter-spacing: 0.1em;
  }
  .card-text > .item-size-text {
    bottom: 5em;
    font-size: 1em;
  }
  .card-text .item-size-text .item-size {
    font-size: 1.2rem;
  }
  .card-text > .item-price {
    margin-top: 1em;
    font-size: 1.2em;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) and (min-height: 1366px){
  .search-title {
    text-indent: 0.1em;
    font-size: 7em;
    padding-top: 3.5em;
    opacity: 0.7;
  }
  .section {
    height: 70vh;
  }
  .checkout-card {
    width: 35vw;
    /* padding-top: 10px; */
  }
  .checkout-card .header-checkout {
    width: 25vw;
  }
  .checkout-card .header-checkout .checkout-title {
    font-size: 1.5em;
    width: 40vw;
    margin: 0.5em 0;
  }

  .checkout-card .body-checkout {
    width: 100%;
    margin: 0;
    padding: 1em;
  }
  .checkout-card .body-checkout .text-box {
    font-size: 1.2em;
    width: 20vw;
    padding: 0.5em 0em;
    margin: 0;
  }
  .checkout-card .body-checkout .text-total {
    font-size: 2em;
    /* width: 10vw; */
    padding: 1.5em 0em;
    margin: 0;
  }
  .checkout-card .footer-checkout .checkout {
    font-size: 1.2em;
    width: 10vw;
    border-radius: 2em;
    margin-bottom: 1em;
  }

  .card-section {
    width: 60vw;
    padding: 1em 0em;
  }


  .card-section .outer-card .card {
    width: 55vw;
    height: 15vh;
    padding: 1.5em 0em;
  }

  .card-image {
    filter: brightness(75%);
    width: 15vw;
    height: 15vh;
    padding: 4em 1em;
  }

  .card-text {
    padding: 1.2em;
    font-size: 1.3em;
  }
  .card-text > .item-title {
    font-size: 1.6em;
    margin-bottom: 1em;
  }

  .card-text > .item-quantity {
    font-size: 0.7em;
    padding-top: 2vh;
    letter-spacing: 0.1em;
  }
  .card-text > .item-size-text {
    bottom: 4em;
    font-size: 1.2em;
  }
  .card-text .item-size-text .item-size {
    font-size: 1em;
  }
  .card-text > .item-price {
    margin-top: 1em;
    font-size: 1.2em;
  }
}
</style>
