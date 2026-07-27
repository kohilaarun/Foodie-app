import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { validateEmail, validatePassword } from "../utilis/validate-function";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({ email: false, password: false });
  console.log("login", login);
  const emailError = validateEmail(login.email);
  const passwordError = validatePassword(login.password);

  const isFormvalid = emailError === "" && passwordError === "";

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isFormvalid) return;
  };
  return (
    <div className="container d-flex flex-row justify-content-center align-items-center ">
      <Form
        className="border border-1 p-3 shadow d-flex flex-column gap-3 rounded w-50"
        onSubmit={handleSubmit}
      >
        <h3 className="d-flex flex-row justify-content-center ">Login</h3>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={login.email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          ></Form.Control>
          {touched.email && emailError && (
            <p className="text-danger">{emailError}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={handleChange}
          ></Form.Control>
          {touched.password && passwordError && (
            <p className="text-danger">{passwordError}</p>
          )}
        </Form.Group>

        <Button type="submit" className="btn-primary">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
