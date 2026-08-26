import React from "react";
import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "../utilis/validate-function";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
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
  const [showPassword, setShowPassword] = useState(false);

  const nameError = validateName(signupDetails.name);
  const emailError = validateEmail(signupDetails.email);
  const passwordError = validatePassword(signupDetails.password);
  const confirmPasswordError = validateConfirmPassword(
    signupDetails.confirmPassword,
    signupDetails.password,
  );

  const isFormValid =
    nameError === "" &&
    emailError === "" &&
    passwordError === "" &&
    confirmPasswordError === "";

  const handleChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });
    if (!isFormValid) return;
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/signup`, {
        signupDetails,
      });
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.error("error occured", error);
    }
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
            value={signupDetails.name}
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
            value={signupDetails.email}
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
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={signupDetails.password}
            ></Form.Control>

            <Button
              className="btn btn-light border"
              onClick={() =>
                setShowPassword((prevShowPassword) => !prevShowPassword)
              }
            >
              {showPassword ? <ImEyeBlocked /> : <ImEye />}
            </Button>
          </InputGroup>
          {touched.password && passwordError && (
            <p className="text-danger">{passwordError}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={signupDetails.confirmPassword}
            ></Form.Control>
            <Button
              className="btn btn-light border"
              onClick={() =>
                setShowPassword((prevShowPassword) => !prevShowPassword)
              }
            >
              {showPassword ? <ImEyeBlocked /> : <ImEye />}
            </Button>
          </InputGroup>
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
