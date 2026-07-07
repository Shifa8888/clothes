export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Riviera Sun Dress",
    category: "Summer",
    price: 189,
    color: "Sand Beige",
    tag: "New",
    image:
      "https://images.pexels.com/photos/37646397/pexels-photo-37646397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 2,
    name: "Azure Silk Gown",
    category: "Evening",
    price: 349,
    color: "Ocean Blue",
    tag: "Best Seller",
    image:
      "https://images.pexels.com/photos/12747235/pexels-photo-12747235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 3,
    name: "Noir Elegance",
    category: "Evening",
    price: 279,
    color: "Midnight Black",
    image:
      "https://images.pexels.com/photos/38388457/pexels-photo-38388457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 4,
    name: "Metropolitan Coat Dress",
    category: "Autumn",
    price: 315,
    color: "Charcoal",
    tag: "Limited",
    image:
      "https://images.pexels.com/photos/12282003/pexels-photo-12282003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 5,
    name: "Scarlet Muse",
    category: "Evening",
    price: 395,
    color: "Ruby Red",
    tag: "New",
    image:
      "https://images.pexels.com/photos/38201315/pexels-photo-38201315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 6,
    name: "Ivory Grace",
    category: "Bridal",
    price: 429,
    color: "Pure White",
    image:
      "https://images.pexels.com/photos/27292466/pexels-photo-27292466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 7,
    name: "Emerald Reverie",
    category: "Summer",
    price: 235,
    color: "Forest Green",
    tag: "Best Seller",
    image:
      "https://images.pexels.com/photos/32218300/pexels-photo-32218300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 8,
    name: "Vintage Dot Dress",
    category: "Summer",
    price: 165,
    color: "Classic Polka",
    image:
      "https://images.pexels.com/photos/19300108/pexels-photo-19300108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

export const categories = [
  {
    name: "Evening",
    tagline: "Statement gowns for unforgettable nights",
    image:
      "https://images.pexels.com/photos/38201315/pexels-photo-38201315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Summer",
    tagline: "Effortless silhouettes for sunlit days",
    image:
      "https://images.pexels.com/photos/32218300/pexels-photo-32218300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Bridal",
    tagline: "Timeless elegance for your special moment",
    image:
      "https://images.pexels.com/photos/27292466/pexels-photo-27292466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Autumn",
    tagline: "Layered luxury for cooler days",
    image:
      "https://images.pexels.com/photos/12282003/pexels-photo-12282003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];
