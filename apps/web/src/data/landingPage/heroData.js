const { ShoppingCartIcon } = require("@heroicons/react/24/outline");

/** @type {import("pliny/config").PlinyConfig } */
const heroData = {
  imageWidth: null,
  imageHeight: null,
  imageAlt: "hero_carousel_image",
  imageData: [
    {
      src: "",
      width: null,
      height: null,
      alt: "",
    },
    {
      src: "",
      width: null,
      height: null,
      alt: "",
    },
    {
      src: "",
      width: null,
      height: null,
      alt: "",
    },
  ],
  prevArrowIcon: ({ handlePrev }) => null, // Pass handlePrev to onClick prop
  nextArrowIcon: ({ handleNext }) => null, // Pass handleNext to onClick prop
};

module.exports = heroData;
