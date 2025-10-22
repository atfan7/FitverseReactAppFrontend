import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../../App";

const AdminLogin = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [token, setToken] = useContext(Store);
  const navigate = useNavigate();

  const changeData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    const newErrors = {};
    const { email, password } = details;

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    axios
      .post("https://fitversereactappbackend.onrender.com/login", details)
      .then((res) => {
        if (
          res.data.message === "User Not Found" ||
          res.data.message === "Incorrect Password"
        ) {
          alert("Invalid Username or Password");
        } else {
          setToken(res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed. Please try again later.");
      });
  };

  if (token) {
    navigate("/dashboard");
  }

  return (
    <div className="container p-5" style={{ height: "80vh" }}>
      <div className="col-lg-6 shadow p-5 mx-auto">
        <h1 className="text-center mb-4" style={{ color: "green" }}>
          Admin Login
        </h1>

        <form onSubmit={submitHandler}>
          <input
            type="email"
            onChange={changeData}
            name="email"
            value={details.email}
            className="form-control mb-1"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-danger mb-2">{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            value={details.password}
            onChange={changeData}
            className="form-control mb-1"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-danger mb-2">{errors.password}</p>
          )}

          <input
            type="submit"
            className="form-control btn btn-success mt-2"
            value="Login"
          />
        </form>

    <div className="d-flex justify-content-start mt-3">
  <div>
    <NavLink
      to="/register"
      className="text-dark fw-medium text-decoration-none"
    >
      Create an Account
    </NavLink>
  </div>
</div>

      </div>
    </div>
  );
};

export default AdminLogin;
