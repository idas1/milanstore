<template>
  <div id="nav" class="navbar" :class="{ change_color: scrollPosition > 100 }">
    <div class="left" href="https://www.acmilan.com/en">
      <img src="@/assets/ACM.png" />
      <p>EP26</p>
    </div>
    <nav class="container">
      <div class="center">
        <div class="logo">AC Milan Store</div>
        <div class="navlink" id="navbarSupportedContent">
          <router-link class="nav-page" to="/">Home</router-link>
          <router-link class="nav-page" to="/store">Store</router-link>
          <router-link class="nav-page" to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <div class="right">
      <div class="search">
        <router-link class="searchBox" to="/search"
          ><i class="uil uil-search search-icon"></i
        ></router-link>
      </div>
      <div class="cart">
        <i class="uil uil-shopping-bag" @click="toggleCart"></i>
        <span class="notification-counter">{{ cartItemCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  emits: ["toggle"],
  data() {
    return {
      scrollPosition: null,
    };
  },
  computed: {
    ...mapGetters(["cartItemCount"]),
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleCart() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>

/* #nav {
  padding: 10px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5em;
} */

.notification-counter {
  position: absolute;
  top: -5px;
  left: 35px;
  background-color: red;
  color: white;
  border-radius: 1em;
  padding: 0.2em 0.35em;
  font-family: "Tahoma";
  font-size: 0.75em;
}

.navbar {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: transparent;
  width: 100vw;
  height: 10em;
  top: 0;
  left: 0;
  position: fixed;
  margin: 0;
  padding: 0;
  transition: 0.3s all linear;
  z-index: 1;
}
.navbar:hover {
  background-color: rgb(229, 30, 30);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.navbar .left {
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: left;
  text-shadow: 1px 1px 2px black;
  text-decoration: none;
}
.navbar .left img {
  display: flex;
  margin-left: 5em;
  width: 5em;
  margin-right: 0.4em;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
}
.navbar .left p {
  font-family: "Tahoma";
  text-decoration: none;
  color: white;
  font-size: 2.5em;
}
.navbar .center {
  display: grid;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px black;
}
.navbar .center .logo {
  display: flex;
  color: white !important;
  font-size: 30px;
  font-family: "Tahoma";
  text-decoration: none;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0.5em 0.6em;
  font-size: 3em;
  letter-spacing: 0.1em;
}
.navbar .center .navlink {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Tahoma";
  text-indent: 0.2em;
  margin-top: -1em;
  text-decoration: none;
  letter-spacing: 0.2em;
}
.navbar .center .navlink .nav-page {
  text-decoration: none;
  color: white;
  font-size: 1em;
  padding: 1.5em 0.5em;
}
.navbar .right {
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: right;
  padding-right: 2em;
}
.navbar .right .searchBox {
  height: 1.5em;
  display: flex;
  cursor: pointer;
  padding: 0.5em 2em;
  background: white;
  border-radius: 5em;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
}
.navbar .right .searchBox .search-icon {
  color: black;
  font-size: 20px;
  padding-right: 0.1em;
}
.navbar .right .cart {
  height: 1em;
  display: flex;
  cursor: pointer;
  padding: 0.7em 0.7em;
  margin-left: 0.2em;
  background: white;
  border-radius: 5em;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  color: black;
  font-size: 18px;
}
.nav-page {
  padding: 0 1.3em 0 1.3em;
  position: relative;
  transition: 1s;
}
.nav-page::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0.7em);
  content: "";
  position: absolute;
  display: block;
  background-color: white;
  border-radius: 100%;
  width: 3em;
  height: 0.1em;
  text-align: center;
  box-sizing: border-box;
  opacity: 0;
  transition: 0.5s;
}
.nav-page:hover::after {
  opacity: 100%;
}

@media screen and (max-width: 360px){
  .navbar{
    height: 5em;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .navbar .center .logo{
    font-size: 15px;
    padding-left: 12px;
    /* display: none; */
  }

  .navbar .left img {
    font-size: 40px;
    margin: 0em 0.1em;
    width: 1.4em;
  }

  .navbar .left p{
    font-size: 10px;
    display: none;
  }

  .navbar .center .navlink .nav-page{
    padding-top: 15px;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-decoration: none;
  }
  .navbar .right{
    padding-right: 0.3em;
    /* width: 60px; */
  }
  .navbar .right .searchBox{
    height: 0.1em;
    cursor: pointer;
    padding: 0.5em 0.7em;
    background: white;
    border-radius: 5em;
  }

  .navbar .right .searchBox .search-icon{
    font-size: 5px;
  }

  .navbar .right .cart{
    font-size: 7px;
  }

  .nav-page::after{
    transform: translate(-45%, 1.2em);
  }

  .notification-counter {
    left: 10px;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .navbar{
    height: 5em;
  }
  .navbar .center .logo{
    padding: 0;
    font-size: 20px;
  }

  .navbar .left{
    font-size: 5px;
  }

  .navbar .left img {
    font-size: 80px;
    margin: 0em 0.2em;
    width: 1em;
  }

  .navbar .left p{
    font-size: 12.5px;
    display: none;
  }

  .navbar .center .navlink .nav-page{
    margin-top: 15px;
    font-size: 10px;
    text-decoration: none;
  }
  .navbar .right{
    padding-right: 0.3em;
    /* width: 60px; */
  }
  .navbar .right .searchBox{
    height: 0.1em;
    cursor: pointer;
    padding: 0.7em 0.7em;
    background: white;
    border-radius: 5em;
  }

  .navbar .right .searchBox .search-icon{
    font-size: 10px;
  }

  .navbar .right .cart{
    font-size: 10px;
  }

  .nav-page::after{
    transform: translate(-50%, 1.2em);
  }

  .notification-counter {
    left: 17.5px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .navbar{
    height: 7em;
  }
  .navbar .center .logo{
    padding: 0;
    font-size: 30px;
  }

  .navbar .left{
    font-size: 10px;
  }

  .navbar .left p{
    font-size: 30px;
  }

  .navbar .center .navlink .nav-page{
    padding-top: 25px;
    font-size: 15px;
    text-decoration: none;
  }
  .navbar .right{
    padding-right: 1.5em;
    /* width: 60px; */
  }
  .navbar .right .searchBox{
    height: 1em;
    cursor: pointer;
    padding: 1em 3em;
    background: white;
    border-radius: 5em;
  }

  .navbar .right .searchBox .search-icon{
    font-size: 20px;
  }

  .navbar .right .cart{
    font-size: 20px;
  }

  .notification-counter {
    left: 35px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
  .navbar{
    height: 8em;
  }
  .navbar .center .logo{
    font-size: 40px;
    padding-left: 10px;
  }

  .navbar .left img {
    font-size: 50px;
    margin: 0em 0.5em 0em 0.5em;
    width: 2em;
  }

  .navbar .left p{
    font-size: 25px;
  }

  .navbar .center .navlink .nav-page{
    padding-top: 20px;
    font-size: 20px;
    text-decoration: none;
  }
  .navbar .right{
    padding-right: 2em;
    /* width: 60px; */
  }
  .navbar .right .searchBox{
    height: 1em;
    cursor: pointer;
    padding: 1em 3em;
    background: white;
    border-radius: 5em;
  }

  .navbar .right .searchBox .search-icon{
    font-size: 25px;
  }

  .navbar .right .cart{
    font-size: 20px;
  }
  .nav-page::after{
    transform: translate(-50%, 0.5em);
  }
  .notification-counter {
    left: 30px;
  }
}

</style>
