const { ShoppingCartIcon } = require("@heroicons/react/24/outline");

/** @type {import("pliny/config").PlinyConfig } */
const heroData = {
  imageWidth: null,
  imageHeight: null,
  imageAlt: "hero_carousel_image",
  imageData: [
    {
      src: "https://i.imgur.com/eN4q3UX.png",
      width: null,
      height: null,
      alt: "hero-1",
    },
    {
      src: "https://i.imgur.com/6rPdgFK.png",
      width: null,
      height: null,
      alt: "",
    },
    {
      src: "https://i.imgur.com/tao0zgA.png",
      width: null,
      height: null,
      alt: "",
    },
  ],
  prevArrowIcon: ({ handlePrev }) => null, // Pass handlePrev to onClick prop
  nextArrowIcon: ({ handleNext }) => null, // Pass handleNext to onClick prop
};

module.exports = heroData;
