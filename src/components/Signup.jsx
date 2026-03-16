import React, { useState } from "react";
import "../index.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (firstName === "") {
      setError("Enter First Name");
      return;
    }
    if (lastName === "") {
      setError("Enter Last Name");
      return;
    }
    if (email === "") {
      setError("Enter Email");
      return;
    }
    if (password === "") {
      setError("Enter Password");
      return;
    }
    if (confirmPassword === "") {
      setError("Enter Confirm Password");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }

    setSuccess("Signup completed successfully");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>Signup</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="primary-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
