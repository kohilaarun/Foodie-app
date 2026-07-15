import React from "react";

import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import pizzaCard from "../assets/dishes/pizzaCard.png";
import burgerCard from "../assets/dishes/burgerCard.png";
import pastaCard from "../assets/dishes/pastaCard.png";
import saladCard from "../assets/dishes/saladCard.png";
import drinkCard from "../assets/dishes/drinkCard.png";
import cakeCard from "../assets/dishes/cakeCard.png";

import { FaHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Starimage from "../assets/Starimage.svg?react";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";

const Dishes = () => {
  const dishesData = [
    {
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
    {
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
    {
      id: 3,
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
      id: 4,
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
    {
      id: 6,
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
  return (
    <>
      <div className="d-flex flex-column flex-fill border shadow rounded p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column ">
            <h4>All Dishes </h4>
            <span className="text-secondary pb-3">Showing 12 results</span>
          </div>
          <div>
            <Form.Select>
              <option>Sort by: Popularity</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <Row>
            {dishesData.map((dish, id) => (
              <Col sm={12} lg={6} xl={4} xxl={3} key={dish.id} className="mb-3">
                <Card className="h-100 shadow border rounded-4 w-100 ">
                  <Card.Body className="p-0">
                    <div className="position-relative ">
                      <Card.Img
                        src={dish.image}
                        style={{ objectFit: "cover", aspectRatio: "4/3" }}
                      />

                      <FaHeart
                        size={20}
                        fill="#00000055"
                        stroke="#FFFFFF"
                        strokeWidth={25}
                        className="bg-grey start-900 end-0 position-absolute"
                        style={{ width: "30px" }}
                      />
                    </div>

                    <div className="p-2 m-3 d-flex flex-column gap-1">
                      <Card.Title className="m-0">{dish.name}</Card.Title>
                      <div className="d-flex flex-row gap-2 align-items-center">
                        <Starimage width="18" height="18" />
                        <span
                          style={{ color: "#FAB005 " }}
                          className="fw-semibold"
                        >
                          {dish.rating}
                        </span>
                        <span>({dish.reviews})</span>
                      </div>
                      <span className="fw-bold">₹{dish.price}</span>

                      <Button
                        variant="light"
                        className="w-100 d-flex justify-content-between border"
                      >
                        Add to Cart
                        <Badge
                          className="bg-primary m-auto rounded-circle border border-light  px-0 mx-0"
                          style={{ width: "25px", height: "25px" }}
                        >
                          <GoPlus />
                        </Badge>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center gap-3">
          <Button variant="light" className="border">
            <PiLessThan />
          </Button>
          <Button variant="light" className="border">
            1
          </Button>
          <Button variant="light" className="border">
            2
          </Button>
          <Button variant="light" className="border">
            3
          </Button>
          <Button variant="light" className="border btn">
            <PiGreaterThan />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dishes;
