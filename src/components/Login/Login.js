import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit()}>
        <label>Email:</label>
        <input type="text" required />
        <button>Entra</button>
      </form>
    </div>
  );
};

export default Login;
