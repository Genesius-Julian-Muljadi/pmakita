const { default: ShoppingCart } = require("@/assets/icons/shoppingCart");

/** @type {import("pliny/config").PlinyConfig } */
const popularData = {
  headerTitleID: "Diskon Terbaik Hari Ini",
  headerTitleEN: "Daily Discounts",
  sideLinkID: "Lihat Semua",
  sideLinkEN: "See All",
  sideLinkHref: "",
  leftLabelID: "Sebelumnya",
  leftLabelEN: "Previous",
  rightLabelID: "Selanjutnya",
  rightLabelEN: "Next",
  soldID: "Terjual",
  soldEN: "Sold",
  addID: "Tambah ke Keranjang",
  addEN: "Add to Cart",
  addIcon: ShoppingCart,
  addAction: (product) => {
    console.log("Add to cart!");
  },
};

module.exports = popularData;
