<template>
  <div class="search-page">
    <div class="gradient-section">
      <h1 class="search-title">Search</h1>
    </div>
    <img class="hero-image" src="@/assets/img/2.png" />
    <div class="search-container">
      <input
        class="searchInput"
        type="text"
        v-model="searchWord"
        placeholder="Search..."
        @input="filter"
      />
      <p class="search-result">
        "{{ searchWord }}" - ({{ products.length }})
      </p>
    </div>
    <div class="card-section">
      <div v-for="p in products" :key="p.id" class="outer-card">
        <router-link
          :to="{
            name: 'ProductDetails',
            params: { gender: p.gender, id: p.id },
          }"
          class="card"
        >
          <img class="card-image" :src="p.src" />
          <div class="card-text">
            <p class="item-title">{{ p.title }}</p>
            <p class="item-description">{{ p.description }}</p>
            <p class="item-price">${{ p.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchWord: "",
      products: [],
    }
  },
  computed: {
    filteredProducts() {
      try {
        let a =
          // this.$store.getters.getFilteredProduct ||
          this.$store.getters.allProducts;
        return a;
      } catch (e) {
        console.log(e);
      }
    },
    // searchWord: {
    //   get() {
    //     return this.$store.state.searchWord;
    //   },
    //   set(value) {
    //     this.$store.dispatch("filterProducts", value);
    //   },
    // },
  },
  methods: {
    filter() {
      this.products = this.searchWord == "" 
      ? this.filteredProducts 
      : this.filteredProducts.filter(product => product.title.includes(this.searchWord))
    }
  },
  mounted() {
    this.products = this.filteredProducts;
  }
};
</script>

<style scoped>
.search-page {
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: black;
  height: 100vh;
}

.gradient-section {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 40em;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  text-align: center;
  justify-content: center;
  align-content: center;
}

.search-title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 1em;
  font-weight: bolder;
  text-indent: 0.3em;
  font-size: 3em;
  color: white;
  text-transform: uppercase;
  font-family: "Tahoma";
}
.search-container {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
}
.search-container .searchInput {
  position: relative;
  display: flex;
  justify-content: left;
  outline: 1px solid red;
  border: none;
  font-weight: bolder;
  width: 20vw;
  height: 3vh;
  transition: 0.8s;
  background: transparent;
  font-family: "Tahoma";
  text-indent: 0.5em;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 0.9em;
  background-color: white;
  color: gray;
}
.search-container .search-result {
  position: relative;
  display: flex;
  color: white;
  justify-content: right;
  width: 30vw;
  margin: 1em;
  font-size: 1.5em;
  color: white;
  font-family: "Tahoma";
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 2px black;
}

.hero-image {
  position: relative;
  width: 100vw;
  height: 40em;
  top: 0;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: center;
  animation: fade-in 0.5s forwards;
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 0.5em 0em 5em 0em;
  background-color: black;
}
.card-section .outer-card {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s;
  cursor: pointer;
  overflow: hidden;
}

.card-section .outer-card:first-child {
  border-top: 2px solid red;
}

.card-section .outer-card .card {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 60vw;
  height: 18em;
  background: gray;
  cursor: pointer;
  border: none;
  border-bottom: inherit;
  overflow: hidden;
  transition: transform 0.6s;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 2em 1em;
  border-bottom: 2px solid rgb(40, 40, 40);
}

.outer-card:hover {
  transform: translateX(-0.5em);
}

.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.3s;
  filter: brightness(75%);
  position: relative;
  width: 15vw;
  height: 40vh;
  padding: 4em 5em;
}

.outer-card:hover > .card > .card-image {
  transform: scale(1.05);
}

.card-bottom:hover > .card-image {
  transform: scale(1.05);
}

.card-text {
  display: flex;
  flex-direction: column;
  padding: 1em 5em 7em 2em;
  font-size: 1em;
  word-wrap: break-word;
  text-align: left;
  align-self: right;
  color: white;
  width: 70vw;
}
.card-text > .item-title {
  font-size: 2em;
  font-weight: bolder;
  color: white;
  margin: 0;
  margin-bottom: 1em;
}
.card-text > .item-description {
  font-size: 1em;
  color: white;
}
.card-text > .item-price {
  display: flex;
  justify-content: center;
  margin-top: 3em;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-style: italic;
  font-family: "Tahoma";
  font-weight: bolder;
  text-decoration: underline;
  color: greenyellow;
}

@media screen and (max-width: 360px){
  .search-title {
    letter-spacing: 0.01em;
    font-weight: bold;
    text-indent: 0.1em;
    font-size: 3.5em;
    height: 5vh;
    opacity: 0.7;
  }
  .search-container .searchInput {
    width: 45vw;
    height: 5vh;
    text-indent: 1em;
    font-size: 1em;
  }
  .search-container .search-result {
    width: 40vw;
    margin: 1.5em 0.5em;
    font-size: 1em;
    letter-spacing: 0.01em;
  }

  .hero-image {
    width: 100vw;
    height: 25em;
  }

  .card-section {
    width: 100%;
    padding: 0.7em 0;
  }

  .card-section .outer-card .card {
    flex-direction: column;
    width: 80vw;
    height: 30em;
    padding: 1em 1em 0.1em 1em;
    border-bottom: 2px solid rgb(40, 40, 40);
  }

  .outer-card:hover {
    transform: translateX(-0.1em);
  }

  .card-image {
    filter: brightness(75%);
    position: relative;
    width: 80vw;
    height: 50vh;
    padding: 0 1em;
  }

  .card-text {
    padding: 1em;
    font-size: 1em;
    text-align: center;
  }
  .card-text > .item-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
  .card-text > .item-description {
    font-size: 0.7em;
  }
  .card-text > .item-price {
    margin-top: 0.2em;
    font-size: 2em;
    letter-spacing: 0.01em;
  }
}

@media screen and (min-width: 360px) and (max-width: 768px){
  .search-title {
    letter-spacing: 0.1em;
    font-weight: bold;
    text-indent: 0.3em;
    font-size: 4em;
    height: 10vh;
    opacity: 0.7;
  }
  .search-container .searchInput {
    width: 35vw;
    height: 5vh;
    text-indent: 0.5em;
    font-size: 0.7em;
  }
  .search-container .search-result {
    width: 45vw;
    margin: 1.5em 0.5em;
    font-size: 1em;
    letter-spacing: 0.01em;
  }

  .hero-image {
    width: 100vw;
    height: 25em;
  }

  .card-section {
    width: 100%;
    padding: 1em 0;
  }

  .card-section .outer-card .card {
    flex-direction: column;
    width: 75vw;
    height: 31em;
    padding: 0.5em 1em 0.1em 1em;
    border-bottom: 2px solid rgb(40, 40, 40);
  }

  .outer-card:hover {
    transform: translateX(-0.1em);
  }

  .card-image {
    filter: brightness(85%);
    position: relative;
    width: 50vw;
    height: 40vh;
    padding: 0 1em;
  }

  .card-text {
    padding: 1.5em;
    font-size: 1em;
    text-align: center;
  }
  .card-text > .item-title {
    font-size: 1.6em;
    margin-bottom: 0.5em;
  }
  .card-text > .item-description {
    font-size: 1em;
  }
  .card-text > .item-price {
    margin-top: 0.5em;
    font-size: 2em;
    letter-spacing: 0.01em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .search-title {
    letter-spacing: 0.5em;
    font-weight: bold;
    text-indent: 0.7em;
    font-size: 5em;
    height: 7vh;
    opacity: 0.7;
  }
  .search-container .searchInput {
    width: 45vw;
    height: 5vh;
    text-indent: 1em;
    font-size: 1.5em;
  }
  .search-container .search-result {
    width: 40vw;
    margin: 2em 0.5em;
    font-size: 1.5em;
    letter-spacing: 0.01em;
  }

  .hero-image {
    width: 100vw;
    height: 25em;
  }

  .card-section {
    width: 100%;
    padding: 1em 0;
  }

  .card-section .outer-card .card {
    flex-direction: column;
    width: 80vw;
    height: 45em;
    padding: 4em 1em 0.1em 1em;
    border-bottom: 2px solid rgb(40, 40, 40);
  }

  .outer-card:hover {
    transform: translateX(-0.2em);
  }

  .card-image {
    filter: brightness(75%);
    position: relative;
    width: 50vw;
    height: 70vh;
    padding: 0 1em;
  }

  .card-text {
    padding: 2em;
    font-size: 1em;
    text-align: center;
  }
  .card-text > .item-title {
    font-size: 2.4em;
    margin-bottom: 0.5em;
  }
  .card-text > .item-description {
    font-size: 1em;
  }
  .card-text > .item-price {
    margin-top: 0.7em;
    font-size: 3em;
    letter-spacing: 0.01em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) and (max-height: 1366px){
  .search-title {
    letter-spacing: 0.05em;
    font-weight: bold;
    text-indent: 0.5em;
    font-size: 6em;
    height: 7vh;
    opacity: 0.7;
  }
  .search-container .searchInput {
    width: 40vw;
    height: 7vh;
    text-indent: 1.5em;
    font-size: 1.5em;
  }
  .search-container .search-result {
    width: 50vw;
    margin: 2.5em 0.5em;
    font-size: 1.5em;
    letter-spacing: 0.01em;
  }

  .hero-image {
    width: 100vw;
    height: 25em;
  }

  .card-section {
    width: 100%;
    padding: 2em 0;
  }

  .card-section .outer-card .card {
    flex-direction: row;
    width: 85vw;
    height: 27.5em;
    padding: 2em 1em 2em 1em;
    border-bottom: 2px solid rgb(40, 40, 40);
  }

  .outer-card:hover {
    transform: translateX(-0.2em);
  }

  .card-image {
    filter: brightness(75%);
    position: relative;
    width: 60vw;
    height: 60vh;
    padding: 0 1em;
  }

  .card-text {
    padding: 1em;
    font-size: 1em;
    text-align: center;
  }
  .card-text > .item-title {
    font-size: 2.5em;
    margin-bottom: 1em;
  }
  .card-text > .item-description {
    font-size: 1.5em;
  }
  .card-text > .item-price {
    margin-top: 1em;
    font-size: 2.5em;
    letter-spacing: 0.01em;
  }
}
</style>
