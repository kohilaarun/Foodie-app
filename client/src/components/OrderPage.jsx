import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import pizzaCard from "../assets/dishes/pizzaCard.png";
import burgerCard from "../assets/dishes/burgerCard.png";
import drinkCard from "../assets/dishes/drinkCard.png";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { css } from "@emotion/react";

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

const OrderPage = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="d-flex align-items-start">
      {orders.map((order, id) => (
        <Card className="shadow border rounded-4" css={styles.card} key={id}>
          <Card.Body className="p-4 position-relative">
            <div
              className="d-flex justify-content-end position-absolute gap-3"
              css={{ bottom: "8px", right: "8px" }}
            >
              <BsPencil className="pencil" css={styles.pencil} />
              <FaRegTrashAlt
                onClick={handleClick}
                className="pencil"
                css={styles.pencil}
              />
            </div>

            <div className="border  rounded-2 p-2">
              {order.items.map((orderItem, inx) => (
                <div key={inx}>
                  {orderItem.dish.name} - {orderItem.quantity} -
                  {orderItem.subTotal}
                </div>
              ))}
            </div>
            <div> Sub Total : ₹{order.subTotal.toLocaleString("en-IN")}</div>
            <div>
              Delivery Fees : ₹{order.deliveryFee.toLocaleString("en-IN")}
            </div>
            <div>Total : ₹{order.totalAmount.toLocaleString("en-IN")}</div>
          </Card.Body>
        </Card>
      ))}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Order</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            Are you sure?
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="text-light"
              variant="secondary"
              onClick={handleClose}
            >
              NO
            </Button>
            <Button className="text-light">DELETE</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default OrderPage;

const styles = {
  pencil: css`
    opacity: 0;
    cursor: pointer;
    transition: 0.2s opacity;
    color: var(--bs-primary);
  `,
  card: css`
    :hover .pencil {
      opacity: 1;
    }
  `,
};
