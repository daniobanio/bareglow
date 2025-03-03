export interface Product {
  id: number;
  name: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Gentle Hydrating Cleanser",
    brand: "BareGlow",
    rating: 4.8,
    reviews: 127,
    image: "/src/img/product01.png",
    category: "Cleanser",
    description: "Deeply cleanses and hydrates skin with gentle, nourishing ingredients."
  },
  {
    id: 2,
    name: "Vitamin C Brightening Serum",
    brand: "BareGlow",
    rating: 4.6,
    reviews: 94,
    image: "/src/img/product02.png",
    category: "Serum",
    description: "Brightens and evens skin tone while providing powerful antioxidant protection."
  },
  {
    id: 3,
    name: "Hydrating Rose Water Toner",
    brand: "BareGlow",
    rating: 4.7,
    reviews: 156,
    image: "/src/img/product03.png",
    category: "Toner",
    description: "Balances and refreshes skin with pure rose water and hydrating ingredients."
  },
  {
    id: 4,
    name: "Clay Purifying Mask",
    brand: "BareGlow",
    rating: 4.9,
    reviews: 112,
    image: "/src/img/product04.png",
    category: "Mask",
    description: "Deep-cleansing clay mask that purifies and refines pores."
  },
  {
    id: 5,
    name: "Hyaluronic Acid Moisturizer",
    brand: "BareGlow",
    rating: 4.5,
    reviews: 87,
    image: "/src/img/product05.png",
    category: "Moisturizer",
    description: "Intensely hydrating formula with multiple forms of hyaluronic acid."
  }
];
