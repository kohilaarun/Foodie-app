import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { orderContext } from "../contexts/orderContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(orderContext);

  const handleRemove = () => {
    setCartItems([]);
  };

  const handleDelete = (index) => {
    setCartItems(
      cartItems.filter((item, idx) => {
        return index !== idx;
      }),
    );
  };
  const subTotalArray = cartItems.map((item, index) => {
    return item.subTotal;
  });
  const subTotal = Math.sumPrecise(subTotalArray);
  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const total = subTotal + deliveryFee;

  const handleIncrease = (index) => {
    const newArray = [...cartItems];
    const editItem = newArray[index];
    const prevQuntity = editItem.quantity;
    const price = editItem.dish.price;
    const newQuntity = prevQuntity + 1;
    const newSubTotal = newQuntity * price;
    newArray[index] = {
      ...editItem,
      quantity: newQuntity,
      subTotal: newSubTotal,
    };
    setCartItems(newArray);
  };
  const handleDecrease = (index) => {
    const newArray = [...cartItems];
    const editItem = newArray[index];
    const prevQuntity = editItem.quantity;
    const price = editItem.dish.price;
    const newQuntity = prevQuntity > 0 ? prevQuntity - 1 : 0;
    const newSubTotal = newQuntity * price;
    newArray[index] = {
      ...editItem,
      quantity: newQuntity,
      subTotal: newSubTotal,
    };
    setCartItems(newArray);
  };

  const handleSubmit = () => {
    alert("order submited");
  };

  return (
    <div
      className="d-flex flex-column shadow border rounded p-3 "
      style={{ flex: "0 0 350px" }}
    >
      <div className="d-flex border-bottom p-3 justify-content-between">
        <h5>Your Cart({cartItems.length})</h5>
        <Button
          onClick={handleRemove}
          className="text-danger bg-light border-0"
        >
          Clear Cart
        </Button>
      </div>
      <div className="mt-3">
        {cartItems.map((item, index) => (
          <div
            className="d-flex justify-content-between border-bottom rounded p-3 "
            key={item.dish.name}
          >
            <img
              src={item.dish.image}
              alt="img"
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
              <span className="fw-bold">₹{item.subTotal}</span>
              <div className="d-flex border flex-row align-items-center justify-content-between rounded">
                <Button
                  className="btn-light border-0"
                  onClick={() => {
                    handleDecrease(index);
                  }}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  className="btn-light  border  border-0"
                  onClick={() => {
                    handleIncrease(index);
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <Button
                onClick={() => {
                  handleDelete(index);
                }}
                className="btn-light border border-0"
              >
                X
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex  bg-light flex-column align-items-stretch p-3">
        <div className="d-flex flex-column  gap-4">
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Subtotal</span>
            <span className="fw-bold">₹{subTotal}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Delivery Fee</span>
            <span className="fw-bold">₹{deliveryFee}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Total</span>
            <span
              className="fw-bold fs-5"
              style={{ color: "var(--bs-primary)" }}
            >
              ₹{total}
            </span>
          </div>
          <Button className="p-3" onSubmit={handleSubmit}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
