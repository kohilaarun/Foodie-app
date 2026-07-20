import React, { useContext } from "react";

import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";

import { FaHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Starimage from "../assets/Starimage.svg?react";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";

import { dishContext } from "../contexts/dishContext";
import { orderContext } from "../contexts/orderContext";

const Dishes = () => {
  const { filteredDishes } = useContext(dishContext);
  const { cartItems, setCartItems, setShowCart } = useContext(orderContext);

  const handleClick = (dish) => {
    const foundIndex = cartItems.findIndex((item, index) => {
      return item.dish.name === dish.name;
    });
    if (foundIndex === -1) {
      setCartItems([
        ...cartItems,
        { dish: dish, quantity: 1, subTotal: dish.price },
      ]);
    } else {
      const newArray = [...cartItems];
      const editItem = newArray[foundIndex];
      const prevQuntity = editItem.quantity;
      const price = editItem.dish.price;
      const newQuntity = prevQuntity + 1;
      const newSubTotal = newQuntity * price;
      newArray[foundIndex] = {
        ...editItem,
        quantity: newQuntity,
        subTotal: newSubTotal,
      };
      setCartItems(newArray);
    }
    setShowCart(true);
  };

  return (
    <div className="col-12 col-md-9  col-xxl-7">
      <div className="d-flex flex-column flex-fill border shadow rounded p-3  h-100">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <h4>All Dishes </h4>
            <span className="text-secondary pb-3">
              Showing {filteredDishes.length} results
            </span>
          </div>
          <div>
            <Form.Select>
              <option className="fw-bold">Sort by: Popularity</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <Row>
            {filteredDishes.map((dish, id) => (
              <Col sm={12} lg={6} xl={4} xxl={3} key={id} className="mb-3">
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
                        onClick={(e) => {
                          handleClick(dish);
                        }}
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
          <Button variant="primary" className="border">
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
    </div>
  );
};

export default Dishes;
