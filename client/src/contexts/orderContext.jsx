import { createContext, useState } from "react";
export const orderContext = createContext();

import pizzaCard from "../assets/dishes/pizzaCard.png";
import burgerCard from "../assets/dishes/burgerCard.png";
import drinkCard from "../assets/dishes/drinkCard.png";

const initialOrders = [
  {
    items: [
      {
        dish: {
          id: 1,
          name: "Margherita Pizza",
          category: "Pizza",
          price: 249,
          rating: 4.5,
          reviews: 120,
          image: pizzaCard,
          isVeg: true,
          description: "Classic cheese pizza with fresh basil.",
        },
        quantity: 1,
        subTotal: 249,
      },
      {
        dish: {
          id: 2,
          name: "Classic Veg Burger",
          category: "Burger",
          price: 149,
          rating: 4.3,
          reviews: 98,
          image: burgerCard,
          isVeg: true,
          description: "Loaded veggie burger with fresh lettuce.",
        },
        quantity: 1,
        subTotal: 149,
      },
      {
        dish: {
          id: 3,
          name: "Mint Lemonade",
          category: "Drinks",
          price: 99,
          rating: 4.4,
          reviews: 70,
          image: drinkCard,
          isVeg: true,
          description: "Refreshing mint lemonade.",
        },
        quantity: 1,
        subTotal: 99,
      },
    ],
    subTotal: 497,
    deliveryFee: 40,
    totalAmount: 537,
  },
];

const OrderProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orders, setOrders] = useState(initialOrders);

  return (
    <orderContext.Provider
      value={{
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        orders,
        setOrders,
      }}
    >
      {children}
    </orderContext.Provider>
  );
};
export default OrderProvider;
