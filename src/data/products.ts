export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  image: string;
}

export interface Category {
  name: string;
  image: string;
}

export const categories: Category[] = [
  { name: "Soins visage", image: "/images/cat-visage.svg" },
  { name: "Soins corps", image: "/images/cat-corps.svg" },
  { name: "Maquillage", image: "/images/cat-maquillage.svg" },
  { name: "Parfums", image: "/images/cat-parfums.svg" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Sérum Éclat Doré",
    category: "Soins visage",
    price: 18500,
    shortDescription:
      "Sérum illuminateur enrichi en vitamine C pour un teint radieux.",
    image: "/images/product-serum.svg",
  },
  {
    id: 2,
    name: "Crème Hydratante Karité",
    category: "Soins visage",
    price: 12000,
    shortDescription:
      "Hydratation intense au beurre de karité pour peaux sèches.",
    image: "/images/product-creme.svg",
  },
  {
    id: 3,
    name: "Huile Corporelle Ambrée",
    category: "Soins corps",
    price: 15000,
    shortDescription:
      "Huile soyeuse aux notes ambrées pour une peau satinée.",
    image: "/images/product-huile.svg",
  },
  {
    id: 4,
    name: "Beurre Corporel Coco",
    category: "Soins corps",
    price: 9500,
    shortDescription:
      "Beurre fondant à la noix de coco pour une peau douce et nourrie.",
    image: "/images/product-beurre.svg",
  },
  {
    id: 5,
    name: "Rouge à Lèvres Velvet",
    category: "Maquillage",
    price: 8500,
    shortDescription:
      "Fini mat velouté longue tenue, couleur intense.",
    image: "/images/product-rouge.svg",
  },
  {
    id: 6,
    name: "Eau de Parfum Nuit d'Ambre",
    category: "Parfums",
    price: 25000,
    shortDescription:
      "Fragrance envoûtante aux notes d'ambre, vanille et bois de santal.",
    image: "/images/product-parfum.svg",
  },
];
