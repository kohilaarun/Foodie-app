import React from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {
  validateconfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "../utilis/validate-function";

const SignUp = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const nameError = validateName(signup.name);
  const emailError = validateEmail(signup.email);
  const passwordError = validatePassword(signup.password);
  const confirmPasswordError = validateconfirmPassword(
    signup.confirmPassword,
    signup.password,
  );

  const isFormValid =
    nameError === "" &&
    emailError === "" &&
    passwordError === "" &&
    confirmPasswordError === "";

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });
    if (!isFormValid) return;
    alert;
  };
  return (
    <div className=" container d-flex flex-row justify-content-center align-items-center">
      <Form
        className="border border-1 p-3 shadow d-flex flex-column gap-3 rounded w-50 "
        onSubmit={handleSubmit}
      >
        <h3 className="d-flex flex-row justify-content-center ">Signup</h3>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Name"
            name="name"
            value={signup.name}
            onChange={handleChange}
          ></Form.Control>
          {touched.name && nameError && (
            <p className="text-danger">{nameError}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={signup.email}
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
            onChange={handleChange}
            value={signup.password}
          ></Form.Control>
          {touched.password && passwordError && (
            <p className="text-danger">{passwordError}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={signup.confirmPassword}
          ></Form.Control>
          {touched.confirmPassword && confirmPasswordError && (
            <p className="text-danger">{confirmPasswordError}</p>
          )}
        </Form.Group>
        <Button type="submit" className="btn-primary">
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
