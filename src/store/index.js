import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  plugins: [new VuexPersistence().plugin],
  state: {
    men: [
      {
        title: "2023/24 Home Jersey",
        src: require("@/assets/img/men/1.jpg"),
        price: 100,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 1,
      },
      {
        title: "2023/24 Away Jersey",
        src: require("@/assets/img/men/2.jpg"),
        price: 100,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 2,
      },
      {
        title: "2023/24 3rd Jersey",
        src: require("@/assets/img/men/3.jpg"),
        price: 100,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 3,
      },
      {
        title: "2022/23 Home Jersey",
        src: require("@/assets/img/men/4.jpg"),
        price: 200,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 4,
      },
      {
        title: "2022/23 Away Jersey",
        src: require("@/assets/img/men/5.jpg"),
        price: 3780,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 5,
      },
      {
        title: "2022/23 3rd Jersey",
        src: require("@/assets/img/men/6.jpg"),
        price: 280,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 6,
      },
      {
        title: "Jacket",
        src: require("@/assets/img/men/7.jpg"),
        price: 350,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 7,
      },
      {
        title: "Jacket & Pants",
        src: require("@/assets/img/men/8.jpg"),
        price: 235,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 8,
      },
      {
        title: "Hoodie",
        src: require("@/assets/img/men/9.jpg"),
        price: 95,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 9,
      },
      {
        title: "2023/24 Socks",
        src: require("@/assets/img/men/10.jpg"),
        price: 1350,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 10,
      },
      {
        title: "Beanie",
        src: require("@/assets/img/men/11.jpg"),
        price: 1150,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 11,
      },
      {
        title: "Cap",
        src: require("@/assets/img/men/12.jpg"),
        price: 950,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 12,
      },
      {
        title: "Black T-shirt",
        src: require("@/assets/img/men/13.jpg"),
        price: 700,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 13,
      },
      {
        title: "Black Practice Shirt",
        src: require("@/assets/img/men/14.jpg"),
        price: 1300,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 14,
      },
      {
        title: "Red Practice Shirt",
        src: require("@/assets/img/men/15.jpg"),
        price: 700,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        gender: "men",
        id: 15,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 10,
    shipping: 10,
  },
  getters: {
    allProducts: (state) => state.men,
    // getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    // getProductByIdWomen: (state) => (id) =>
    //   state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        let price = item.quantityPrice;
        // total = item.quantityPrice ;
        total += price + (price * state.tax) / 100;
      });
      return (total + state.shipping).toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.men.filter((product) => {
          return (
            product.title.toLowerCase().includes(word) ||
            product.brand.toLowerCase().includes(word) ||
            product.color.toLowerCase().includes(word) ||
            product.type.toLowerCase().includes(word)
          );
        });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
