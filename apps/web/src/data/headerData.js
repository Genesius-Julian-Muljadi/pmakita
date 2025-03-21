const { ShoppingCartIcon } = require("@heroicons/react/24/outline");

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
  cartIcon: ShoppingCartIcon,
  loginButtonID: "Masuk",
  loginButtonEN: "Login",
  signupButtonID: "Daftar",
  signupButtonEN: "Register",
};

module.exports = headerData;
