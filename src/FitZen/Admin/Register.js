import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, password } = details;

    if (!name.trim()) newErrors.name = "Name is required.";

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    axios
      .post("https://fitversereactappbackend.onrender.com/register/", details)
      .then((res) => {
        alert(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        alert("Registration failed. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="container p-5" style={{ height: "80vh" }}>
      <div className="col-lg-6 shadow p-5 mx-auto">
        <h1 className="text-center mb-4" style={{ color: "green" }}>
          Admin Registration
        </h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            onChange={changeData}
            value={details.name}
            placeholder="Enter Name"
            className="form-control mb-1"
          />
          {errors.name && <p className="text-danger mb-2">{errors.name}</p>}

          <input
            type="email"
            name="email"
            onChange={changeData}
            value={details.email}
            placeholder="Enter Email Address"
            className="form-control mb-1"
          />
          {errors.email && <p className="text-danger mb-2">{errors.email}</p>}

          <input
            type="password"
            name="password"
            onChange={changeData}
            value={details.password}
            placeholder="Enter Password"
            className="form-control mb-1"
          />
          {errors.password && (
            <p className="text-danger mb-2">{errors.password}</p>
          )}

          <button type="submit" className="btn btn-success mt-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
