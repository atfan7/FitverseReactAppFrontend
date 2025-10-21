// src/components/ForgetPassword.jsx

import React, { useState } from "react";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    try {
      const res = await axios.post("https://fitversereactappbackend.onrender.com/forgetpassword", {
        email,
      });

      setMessage(res.data.message);
      setEmail("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="container p-5" style={{ height: "80vh" }}>
      <div className="col-lg-6 shadow p-5 mx-auto">
        <h2 className="text-center mb-4" style={{ color: "green" }}>
          Forgot Password
        </h2>

        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            placeholder="Enter your registered email"
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-danger mb-2">{error}</p>}
          {message && <p className="text-success mb-2">{message}</p>}

          <button type="submit" className="btn btn-success w-100">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
