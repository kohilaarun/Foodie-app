import { createContext, useState } from "react";

export const dishContext = createContext();
import pizzaCard from "../assets/dishes/pizzaCard.png";
import burgerCard from "../assets/dishes/burgerCard.png";
import pastaCard from "../assets/dishes/pastaCard.png";
import saladCard from "../assets/dishes/saladCard.png";
import drinkCard from "../assets/dishes/drinkCard.png";
import cakeCard from "../assets/dishes/cakeCard.png";
import Allimage from "../assets/Allimage.svg?react";

const dishes = [
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.5,
    reviews: 120,
    image: pizzaCard,
    isVeg: true,
    description: "Classic cheese pizza with fresh basil.",
  },
  {
    name: "Classic Veg Burger",
    category: "Burger",
    price: 149,
    rating: 4.3,
    reviews: 98,
    image: burgerCard,
    isVeg: true,
    description: "Loaded veggie burger with fresh lettuce.",
  },
  {
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 199,
    rating: 4.6,
    reviews: 80,
    image: pastaCard,
    isVeg: true,
    description: "Creamy white sauce pasta with herbs.",
  },
  {
    name: "Greek Salad",
    category: "Salad",
    price: 179,
    icon: "",
    rating: 4.2,
    reviews: 60,
    image: saladCard,
    isVeg: true,
    description: "Healthy salad with olives and feta.",
  },
  {
    name: "Mint Lemonade",
    category: "Drinks",
    price: 99,
    rating: 4.4,
    reviews: 70,
    image: drinkCard,
    isVeg: true,
    description: "Refreshing mint lemonade.",
  },
  {
    name: "Choco Lava Cake",
    category: "Desserts",
    price: 149,
    rating: 4.7,
    reviews: 110,
    image: cakeCard,
    isVeg: true,
    description: "Warm chocolate cake with lava center.",
  },
];

const categories = [
  {
    name: "All",
    label: "All",
    Svg: Allimage,
  },
  {
    name: "Pizza",
    label: " Pizza",
    icon: "🍕",
  },
  { name: "Burger", label: " Burger", icon: "🍔" },
  { name: "Pasta", label: " Pasta", icon: "🍝" },
  { name: "Salad", label: " Salad", icon: "🥗" },
  { name: "Drinks", label: " Drinks", icon: "🥤" },
  { name: "Desserts", label: " Desserts", icon: "🧁" },
  { name: "Snacks", label: " Snacks", icon: "🍟" },
];

const DishProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "All",
    label: "All",
    Svg: Allimage,
  });

  const filteredDishes = dishes.filter((item, index) => {
    return (
      selectedCategory.name === item.category || selectedCategory.name === "All"
    );
  });

  return (
    <dishContext.Provider
      value={{
        filteredDishes,
        selectedCategory,
        setSelectedCategory,
        categories,
      }}
    >
      {children}
    </dishContext.Provider>
  );
};
export default DishProvider;
