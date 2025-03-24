const { default: WhatsApp } = require("@/assets/icons/whatsApp");
const { default: Phone } = require("@/assets/icons/phone");
const { default: noImages } = require("@/assets/noImage");

/** @type {import("pliny/config").PlinyConfig } */
const footerData = {
  section_1TitleID: "Kategori Populer",
  section_1TitleEN: "Popular Categories",
  section_2TitleID: "Layanan Pelanggan",
  section_2TitleEN: "Services",
  section_3TitleID: "Hubungi Kami",
  section_3TitleEN: "Contact Us",
  section_4TitleID: "Unduh Aplikasi",
  section_4TitleEN: "Download Our App",

  section_1Content: [
    { href: "/", titleID: "Telur", titleEN: "Eggs" },
    { href: "/", titleID: "Daging", titleEN: "Meats" },
    { href: "/", titleID: "Ayam", titleEN: "Poultry" },
    { href: "/", titleID: "Tepung", titleEN: "Flour" },
    { href: "/", titleID: "Gula", titleEN: "Sugar" },
    { href: "/", titleID: "Beras", titleEN: "Grains" },
  ],
  section_2Content: [
    { href: "/", titleID: "Tentang Kami", titleEN: "About Us" },
    { href: "/", titleID: "Syarat & Ketentuan", titleEN: "Terms & Conditions" },
    { href: "/", titleID: "FAQ", titleEN: "FAQ" },
    { href: "/", titleID: "Kebijakan Privasi", titleEN: "Privacy Policies" },
    {
      href: "/",
      titleID: "Kebijakan Pasar Makita",
      titleEN: "General Company Policies",
    },
    {
      href: "/",
      titleID: "Kebijakan Pembatalan & Pengembalian",
      titleEN: "Cancellations & Returns",
    },
  ],
  section_3Content: [
    {
      href: "/",
      titleID: "WhatsApp",
      titleEN: "WhatsApp",
      icon: WhatsApp,
      phone: "+62 21-123-321",
    },
    {
      href: "/",
      titleID: "Hubungi Kami",
      titleEN: "Contact Us",
      icon: Phone,
      phone: "+62 21-123-321",
    },
  ],
  section_4Content: [
    {
      href: "/",
      icon: noImages[2],
      alt: "section_4-1",
    },
    {
      href: "/",
      icon: noImages[2],
      alt: "section_4-2",
    },
  ],
};

module.exports = footerData;
