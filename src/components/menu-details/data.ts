export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
};

export type MenuCategory = {
  id: number;
  title: string;
  bgImage: string;
  children?: MenuItem[];
};

export const  menuCategories: MenuCategory[] = [
  {
    id: 1,
    title: "Breakfast & Starter",
    bgImage: "/menu/m1.png",
    children: [
      { id: 101, name: "Pancakes", price: 5.99, description: "Fluffy pancakes with syrup", image: "/items/pancakes.png" },
      { id: 102, name: "Omelette", price: 6.49, description: "Three-egg omelette with cheese", image: "/items/omelette.png" },
    ],
  },
  {
    id: 2,
    title: "Salad & Lettuces",
    bgImage: "/menu/m1.png",
    children: [
      { id: 201, name: "Caesar Salad", price: 7.99, description: "Fresh lettuce with Caesar dressing", image: "/items/caesar_salad.png" },
      { id: 202, name: "Greek Salad", price: 8.49, description: "Tomatoes, cucumbers, olives, feta", image: "/items/greek_salad.png" },
    ],
  },
  {
    id: 3,
    title: "Meat & Meals",
    bgImage: "/menu/m1.png",
    children: [
      { id: 301, name: "Grilled Chicken", price: 12.99, description: "Served with veggies and rice", image: "/items/grilled_chicken.png" },
      { id: 302, name: "Beef Steak", price: 15.99, description: "Cooked to your liking", image: "/items/beef_steak.png" },
    ],
  },
  {
    id: 4,
    title: "Seafood & Soups",
    bgImage: "/menu/m2.png",
    children: [
      { id: 401, name: "Clam Chowder", price: 6.99, description: "Creamy soup with clams", image: "/items/clam_chowder.png" },
      { id: 402, name: "Grilled Salmon", price: 14.99, description: "With lemon butter sauce", image: "/items/grilled_salmon.png" },
    ],
  },
  {
    id: 5,
    title: "Desserts & Snacks",
    bgImage: "/menu/m2.png",
    children: [
      { id: 501, name: "Chocolate Cake", price: 4.99, description: "Rich and moist", image: "/items/chocolate_cake.png" },
      { id: 502, name: "French Fries", price: 3.49, description: "Crispy golden fries", image: "/items/french_fries.png" },
    ],
  },
  {
    id: 6,
    title: "Drinks & Juices",
    bgImage: "/menu/m2.png",
    children: [
      { id: 601, name: "Orange Juice", price: 2.99, description: "Fresh squeezed", image: "/items/orange_juice.png" },
      { id: 602, name: "Coffee", price: 2.49, description: "Hot brewed coffee", image: "/items/coffee.png" },
    ],
  },
];
