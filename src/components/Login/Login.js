import React from "react";
import Button from "../Button/Button";
import "./Login.css";

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit()}>
        <label>Email:</label>
        <input type="text" required />
        <Button text="Entra" />
      </form>
    </div>
  );
};

export default Login;
