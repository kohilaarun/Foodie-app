import React, { useContext } from "react";
import {
  Navbar,
  Button,
  Nav,
  Badge,
  InputGroup,
  Form,
  Image,
} from "react-bootstrap";
import profile from "../assets/profile.png";
import { FiHome } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import foodieLogo from "../assets/Foodie.svg";
import { Link } from "react-router-dom";
import { orderContext } from "../contexts/orderContext";

export const Navigation = () => {
  const { cartItems, setShowCart } = useContext(orderContext);
  return (
    <div className="border shadow">
      <Navbar
        bg="white"
        expand="lg"
        className="d-flex justify-content-between p-2 align-items-center "
        style={{ gap: "50px" }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-success d-flex align-items-center fw-bold"
        >
          <img src={foodieLogo} alt="foodie" width={50} />
          <span style={{ fontSize: "33px" }}>Foodie</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-between ">
          <Form style={{ flexBasis: "500px" }}>
            <InputGroup>
              <Form.Control
                placeholder="Search for dishes, restaurants..."
                className="border p-3"
              />
              <InputGroup.Text>
                <FiSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <div>
            <Nav className="d-flex  align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className="d-flex align-items-center gap-1"
              >
                <FiHome />
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/orders"
                className="d-flex align-items-center gap-1"
              >
                <FiClipboard />
                Orders
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/favorites"
                className="d-flex align-items-center gap-1"
              >
                <FiHeart />
                Favorites
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center gap-1">
                <Button
                  variant="outline-success"
                  className="position-relative rounded gap-2 d-flex align-items-center"
                  onClick={() => setShowCart(true)}
                >
                  <FiShoppingCart className="" />
                  <Badge
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartItems.length}
                  </Badge>
                  Cart
                </Button>
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center gap-1">
                <Image
                  src={profile}
                  alt="img"
                  roundedCircle
                  style={{ width: 50, height: 50, objectFit: "cover" }}
                />
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
