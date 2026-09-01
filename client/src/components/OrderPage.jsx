import React, { useContext, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { css } from "@emotion/react";
import { orderContext } from "../contexts/orderContext";

const OrderPage = () => {
  const { orders, setOrders } = useContext(orderContext);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleDelete = () => {
    setOrders([]);
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
            <Button className="text-light" onClick={handleDelete}>
              DELETE
            </Button>
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
