import React, { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { validateEmail, validatePassword } from "../utilis/validate-function";
import axios from "axios";
import { userContext } from "../contexts/userContext";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailError = validateEmail(loginDetails.email);
  const passwordError = validatePassword(loginDetails.password);

  const isFormvalid = emailError === "" && passwordError === "";

  const { login } = useContext(userContext);

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isFormvalid) return;
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        { loginDetails },
      );
      const { user, token } = res.data;
      login(user, token);
    } catch (error) {
      alert(error.response.data.message);
      console.log("error occured", error);
    }
  };
  return (
    <div className="row d-flex flex-row justify-content-center align-items-center">
      <Form
        className="border border-1 p-3 shadow d-flex flex-column gap-3 rounded col-md-6 col-xxl-3"
        onSubmit={handleSubmit}
      >
        <h3 className="d-flex flex-row justify-content-center ">Login</h3>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={loginDetails.email}
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
            value={loginDetails.password}
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
