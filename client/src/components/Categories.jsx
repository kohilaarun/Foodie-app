import React from "react";
import { Button, Card } from "react-bootstrap";
import Allimage from "../assets/Allimage.svg?react";

const Categories = () => {
  const Categories = [
    {
      id: 0,
      name: "All",
      label: "All",
      Svg: Allimage,
    },
    {
      id: 1,
      name: "Pizza",
      label: " Pizza",
      icon: "🍕",
    },
    { id: 2, name: "Burger", label: " Burger", icon: "🍔" },
    { id: 3, name: "Pasta", label: " Pasta", icon: "🍝" },
    { id: 4, name: "Salad", label: " Salad", icon: "🥗" },
    { id: 5, name: "Drinks", label: " Drinks", icon: "🥤" },
    { id: 6, name: "Desserts", label: " Desserts", icon: "🧁" },
    { id: 7, name: "Snacks", label: " Snacks", icon: "🍟" },
  ];
  return (
    <div
      className="border p-3 w-25 shadow"
      style={{ maxWidth: 250, minWidth: 200 }}
    >
      <div>
        <h5>Categories</h5>
      </div>

      <div className="d-flex flex-column gap-4">
        {Categories.map((item, index) => {
          return (
            <Button variant="white" key={index} className="text-start ">
              {item.Svg && <item.Svg width={25} fill="var(--bs-primary)" />}
              <span style={{ marginRight: 6 }}>{item.icon}</span>
              <span className="fw-bold">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
