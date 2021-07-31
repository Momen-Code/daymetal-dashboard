import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="container">
        <div className="form-container">
          <div className="logo-container">
            <Logo />
          </div>
          <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   login(username, password);
          // }}
          >
            <div className="username-container">
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password-container">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <Link to="/products">Login</Link>
            </div>
          </form>
        </div>
        <div className="background-container">
          <div className="layer">
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
