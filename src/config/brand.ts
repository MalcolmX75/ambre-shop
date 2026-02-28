export const brand = {
  brandName: "AMBRE SHOP",
  tagline: "Votre beauté, sublimée naturellement",
  description:
    "Cosmétiques premium sélectionnés avec soin pour révéler votre éclat naturel.",

  colors: {
    blush: "#F6E2DD",
    gold: "#E1C48E",
    bronze: "#B78A58",
    deepBrown: "#6A4A2C",
    offWhite: "#FFF9F7",
  },

  whatsappNumber: "24100000000",
  whatsappPrefillMessage: "Bonjour Ambre Shop",
  facebookUrl: "https://facebook.com/ambreshop",

  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappPrefillMessage)}`;
  },
};
