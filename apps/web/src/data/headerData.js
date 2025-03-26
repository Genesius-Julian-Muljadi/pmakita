const { default: ShoppingCart } = require("@/assets/icons/shoppingCart");

/** @type {import("pliny/config").PlinyConfig } */
const headerData = {
  sticky: false,
  logo: "https://i.imgur.com/hg6fBTS.png",
  logoWidth: null,
  logoHeight: null,
  logoAlt: "Pasar Makita",
  searchDescID: "Kategori",
  searchDescEN: "Category",
  searchPlaceholderID: "Cari kebutuhan pokok, bahan makanan, dan lainnya...",
  searchPlaceholderEN: "Search essentials, groceries, and more...",
  searchPlaceholderSmID: "Cari produk...",
  searchPlaceholderSmEN: "Search for products...",
  searchAction: (searchText) => {
    console.log("Search!");
    console.log(searchText);
  },
  cartIcon: ShoppingCart,
  loginButtonID: "Masuk",
  loginButtonEN: "Login",
  signupButtonID: "Daftar",
  signupButtonEN: "Register",
};

module.exports = headerData;
