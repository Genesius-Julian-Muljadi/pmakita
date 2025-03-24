const { default: ShoppingCart } = require("@/assets/icons/shoppingCart");

/** @type {import("pliny/config").PlinyConfig } */
const popularData = {
  headerTitleID: "Produk Segar",
  headerTitleEN: "Fresh Produce",
  sideLinkID: "Lihat Semua",
  sideLinkEN: "See All",
  sideLinkHref: "",
  leftLabelID: "Sebelumnya",
  leftLabelEN: "Previous",
  rightLabelID: "Selanjutnya",
  rightLabelEN: "Next",
  addID: "Tambah",
  addEN: "To Cart",
  addIcon: ShoppingCart,
  addAction: (product) => {
    console.log("Add to cart!");
  },
};

module.exports = popularData;
