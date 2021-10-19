import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import { login } from "../../shared/Service";
import "./Login.css";
import { UserContext } from "../../shared/UserContext";

const Login = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email)
      .then((users) => {
        if (users.length === 0) {
          throw Error("User not found");
        }

        setLoggedUser(users[0]);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });

    setEmail("");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: (Sincere@april.biz)</label>
        <input
          className={`${error && "invalid-input"}`}
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {error && (
          <p className="error-message">Impossibile effettuare il login.</p>
        )}
        <Button text="Entra" />
      </form>
    </div>
  );
};

export default Login;
