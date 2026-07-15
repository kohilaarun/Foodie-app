import React from "react";
import { Button } from "react-bootstrap";
import pizzaCard from "../assets/dishes/pizzaCard.png";
import burgerCard from "../assets/dishes/burgerCard.png";
import drinkCard from "../assets/dishes/drinkCard.png";

const AddtoCart = () => {
  const cartItems = [
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
    },
    {
      dish: {
        id: 5,
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
    },
  ];
  return (
    <div
      className="d-flex flex-column shadow border rounded p-3 "
      style={{ flex: "0 0 350px" }}
    >
      <div className="d-flex border-bottom p-3 justify-content-between">
        <h5>Your Cart(3)</h5>
        <span className="text-danger">Clear Cart</span>
      </div>
      <div className="mt-3">
        {cartItems.map((item, index) => (
          <div
            className="d-flex justify-content-between border-bottom rounded p-3 "
            key={index}
          >
            <img
              src={item.dish.image}
              alt="image"
              className="rounded-4 border"
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                marginRight: 25,
              }}
            />
            <div className="d-flex flex-column align-items-start justify-content-center gap-2">
              <h6 className="fw-bold">{item.dish.name}</h6>
              <span className="fw-bold">₹{item.dish.price}</span>
              <div className="d-flex border flex-row align-items-center justify-content-between rounded">
                <Button className="btn-light border-0">-</Button>
                {item.quantity}
                <Button className="btn-light  border  border-0">+</Button>
              </div>
            </div>
            <div>
              <Button className="btn-light border border-0">X</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex  bg-light flex-column align-items-stretch p-3">
        <div className="d-flex flex-column  gap-4">
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Subtotal</span>
            <span className="fw-bold">₹497</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Delivery Fee</span>
            <span className="fw-bold">₹40</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Total</span>
            <span
              className="fw-bold fs-5"
              style={{ color: "var(--bs-primary)" }}
            >
              ₹537
            </span>
          </div>
          <Button className="p-3 ">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
