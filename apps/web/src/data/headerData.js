const { default: ShoppingCart } = require("@/assets/icons/shoppingCart");

/** @type {import("pliny/config").PlinyConfig } */
const headerData = {
  sticky: false,
  logo: "",
  logoWidth: null,
  logoHeight: null,
  logoAlt: "Pasar Makita",
  searchDescID: "Kategori",
  searchDescEN: "Category",
  searchPlaceholderID: "Cari kebutuhan pokok, bahan makanan, dan lainnya...",
  searchPlaceholderEN: "Search essentials, groceries, and more...",
  searchAction: (searchText) => {
    console.log("Search!");
    console.log(searchText);
  },
  cartLabelID: "Keranjang",
  cartLabelEN: "Cart",
  cartIcon: ShoppingCart,
  loginButtonID: "Masuk",
  loginButtonEN: "Login",
  signupButtonID: "Daftar",
  signupButtonEN: "Register",
};

module.exports = headerData;
