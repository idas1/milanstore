<template>
  <div class="outer-card">
    <div class="card">
      <div class="cart">
        <div class="cart-header">
          <div class="cart-close" @click="toggleCartButton">X</div>
          <div class="subtotal">
            Subtotal:
            <div class="subtotal-text">${{ cartTotalPrice }}</div>
          </div>
        </div>
        <div class="cart-body">
          <CartItem />
        </div>
        <router-link class="cart-footer" to="/checkout">
          <div class="checkout">Checkout</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";
export default {
  components: { CartItem },
  name: "Cart",
  emits: ["toggleCart"],
  computed: {
    ...mapGetters(["cartItemCount", "cartTotalPrice"]),
  },
  methods: {
    toggleCartButton() {
      this.$emit("toggleCart");
    },
  },
};
</script>

<style scoped>
.outer-card {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: top;
  width: 100%;
  height: 100%;
  top: 115px;
  z-index: 1;
}
.outer-card.open {
  display: none;
}
.outer-card .cart {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 25vw;
  transition: 0.5s;
  height: 57.5vh;
  background-color: #dedede;
  transform: translateX(-1.25%);
  border-radius: 10px;
  border: 0.1em solid #777;
}
.outer-card .cart .cart-header {
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 5px solid gray;
  border-right: 3px solid gray;
  border-left: 1px solid gray;
  width: 95%;
  background-color: wheat;
  align-self: center;
  text-align: center;
  top: 0.2em;
  border-radius: 10px;
  margin-bottom: 0.5em;
}
.outer-card .cart .cart-header:before {
  content: "";
  position: fixed;
  height: 0px;
  width: 0px;
  right: 18px;
  top: -30px;
  border-width: 15px;
  border-color: transparent white transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  transition: 0.5s;
  z-index: -6;
}
.outer-card .cart .cart-header .cart-close {
  display: block;
  transition: 0.5s;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.1em;
  font-family: "Tahoma";
  position: relative;
  cursor: pointer;
  border-radius: 0.4em;
  width: 1.5vw;
  margin: 0 1em;
  align-self: center;
  text-align: center;
}
.outer-card .cart .cart-header .subtotal {
  position: relative;
  font-family: "Tahoma";
  font-size: 1em;
  width: 20vw;
  padding: 1em 2em;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.outer-card .cart .cart-header .subtotal-text {
  display: flex;
  flex-direction: row;
  font-size: 1em;
  padding-left: 1em;
  letter-spacing: 0.1em;
  color: black;
  font-family: "Tahoma";
  font-weight: bolder;
}

.outer-card .cart .cart-body {
  background-color: #dedede;
  overflow: auto;
  height: 40vh;
}

.outer-card .cart .cart-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-self: center;
  border-top: 0.1em solid black;
  /* width: 11vw; */
  /* height: 4vh; */
  border-radius: 2em 2em 1em 1em;
  justify-content: center;
  background-color: red;
}
.outer-card .cart .cart-footer .checkout {
  margin-bottom: 1em;
  display: block;
  transition: 0.5s;
  border: none;
  background-color: black;
  color: white;
  padding: 0.8em 2em;
  align-self: center;
  text-align: center;
  bottom: -10px;
  font-size: 1em;
  font-family: "Tahoma";
  width: 10vw;
  position: fixed;
  z-index: -1;
  cursor: pointer;
  border-radius: 2em;
  transition: 0.3ms;
}

.outer-card .cart .cart-footer .checkout:hover{
  background-color: red;
  color: black;
  font-weight: bolder;
  font-size: medium;
  letter-spacing: 0.1em;
  transition: 0.3ms;
}
@media screen and (max-width: 360px){
  .outer-card {
    top: 60px;
  }
  .outer-card .cart {
    width: 75vw;
    height: 50vh;
    left: 0px;
  }

  .outer-card .cart .cart-header {
    border-bottom: 3px solid gray;
    border-right: 3px solid gray;
    border-left: 1px solid gray;
    width: 95%;
    margin-bottom: 1em;
  }
  .outer-card .cart .cart-header:before {
    right: -5px;
    top: -27.5px;
    border-width: 15px;
    margin-top: -2.5px;
    transform: rotate(90deg);
    z-index: -5;
  }
  .outer-card .cart .cart-header .cart-close {
    font-size: 0.7em;
    border-radius: 0.4em;
    width: 10vw;
    margin: 0 1em;
  }
  .outer-card .cart .cart-header .subtotal {
    font-size: 0.7em;
    width: 150vw;
    padding-left: 1em;
  }
  .outer-card .cart .cart-header .subtotal-text {
    font-size: 1em;
    padding-left: 3em;
  }

  .outer-card .cart .cart-body {
    height: 35vh;
    font-size: 1em;
  }

  .outer-card .cart .cart-footer .checkout {
    font-size: 0.5em;
    margin: 3vh 0;
    width: 15vw;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .outer-card {
    top: 65px;
  }
  .outer-card .cart {
    width: 65vw;
    height: 31vh;
    left: 1px;
  }

  .outer-card .cart .cart-header {
    border-bottom: 3px solid gray;
    border-right: 3px solid gray;
    border-left: 1px solid gray;
    width: 95%;
    margin-bottom: 1em;
  }
  .outer-card .cart .cart-header:before {
    right: 1px;
    top: -30px;
    border-width: 15px;
    margin-top: -2.5px;
    transform: rotate(90deg);
    z-index: -5;
  }
  .outer-card .cart .cart-header .cart-close {
    font-size: 0.5em;
    border-radius: 0.4em;
    width: 10vw;
    margin: 0 1em;
  }
  .outer-card .cart .cart-header .subtotal {
    font-size: 0.5em;
    width: 100vw;
    padding-left: 0.1em;
  }
  .outer-card .cart .cart-header .subtotal-text {
    font-size: 1em;
    padding-left: 3em;
  }

  .outer-card .cart .cart-body {
    height: 20vh;
  }

  .outer-card .cart .cart-footer .checkout {
    font-size: 0.5em;
    margin: 2vh 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .outer-card {
    top: 90px;
  }
  .outer-card .cart {
    width: 45vw;
    height: 32vh;
    left: -22.5px;
  }

  .outer-card .cart .cart-header {
    border-bottom: 3px solid gray;
    border-right: 3px solid gray;
    border-left: 1px solid gray;
    width: 95%;
    margin-bottom: 1em;
  }
  .outer-card .cart .cart-header:before {
    right: 5px;
    top: -30px;
    border-width: 15px;
    margin-top: 0px;
    transform: rotate(90deg);
    z-index: -5;
  }
  .outer-card .cart .cart-header .cart-close {
    font-size: 1em;
    border-radius: 0.4em;
    width: 10vw;
    margin: 0 1em;
  }
  .outer-card .cart .cart-header .subtotal {
    font-size: 1.2em;
    width: 100vw;
    padding-left: 0.1em;
  }
  .outer-card .cart .cart-header .subtotal-text {
    font-size: 1em;
    padding-left: 1em;
  }

  .outer-card .cart .cart-body {
    height: 20vh;
  }

  .outer-card .cart .cart-footer .checkout {
    font-size: 0.7em;
    margin: 1.5vh 0;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (max-height: 1366px){
  .outer-card {
    top: 105px;
  }
  .outer-card .cart {
    width: 45vw;
    height: 70vh;
    left: -27.5px;
  }

  .outer-card .cart .cart-header {
    border-bottom: 4px solid gray;
    border-right: 4px solid gray;
    border-left: 2px solid gray;
    width: 95%;
    margin-bottom: 1em;
  }
  .outer-card .cart .cart-header:before {
    right: 6px;
    top: -27px;
    border-width: 15px;
    margin-top: -3.5px;
    transform: rotate(90deg);
    z-index: -5;
  }
  .outer-card .cart .cart-header .cart-close {
    font-size: 1.2em;
    border-radius: 0.4em;
    width: 10vw;
    margin: 0 2.5em 0 1em;
  }
  .outer-card .cart .cart-header .subtotal {
    font-size: 1.2em;
    width: 150vw;
    padding-left: 0.1em;
  }
  .outer-card .cart .cart-header .subtotal-text {
    font-size: 1em;
    padding-left: 1.2em;
  }

  .outer-card .cart .cart-body {
    height: 45vh;
  }
  .outer-card .cart .cart-footer .checkout {
    font-size: 1em;
    margin-bottom: 6%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (min-height: 1366px){
  .outer-card {
    top: 102.5px;
  }
  .outer-card .cart {
    width: 45vw;
    height: 30vh;
    left: -12.5px;
  }

  .outer-card .cart .cart-header {
    border-bottom: 4px solid gray;
    border-right: 4px solid gray;
    border-left: 2px solid gray;
    width: 95%;
    margin-bottom: 1em;
  }
  .outer-card .cart .cart-header:before {
    right: 6px;
    top: -27px;
    border-width: 15px;
    margin-top: -3.5px;
    transform: rotate(90deg);
    z-index: -5;
  }
  .outer-card .cart .cart-header .cart-close {
    font-size: 1.2em;
    border-radius: 0.4em;
    width: 10vw;
    margin: 0 2.5em 0 1em;
  }
  .outer-card .cart .cart-header .subtotal {
    font-size: 1.2em;
    width: 150vw;
    padding-left: 0.1em;
  }
  .outer-card .cart .cart-header .subtotal-text {
    font-size: 1em;
    padding-left: 1.2em;
  }

  .outer-card .cart .cart-body {
    height: 20vh;
  }

  .outer-card .cart .cart-footer .checkout {
    font-size: 1em;
    margin-bottom: 3.5%;
  }
}
</style>
