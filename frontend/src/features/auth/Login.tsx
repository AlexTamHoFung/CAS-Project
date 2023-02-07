import "./Login.css";
import React, { useState } from "react";
import { loginThunk } from "./authSlice";
import { useAppDispatch } from "../../app/hook";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="Login__container Login__customer">
      <form onSubmit={submitHandler}>
        <div className="Login__headerTitle">
          <img src={require("./logo.png")} alt="logo" height={"80rem"} />
          <h3>Login</h3>
        </div>
        <div className="Login__formContent">
          <div className="Login__formRow">
            <label htmlFor="username">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="Login__formRow">
            <label htmlFor="username">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="Login__formRow">
            <input
              type="submit"
              value="submit"
              className="Login__customerSubmit"
            ></input>
          </div>
          <a href="/register" className="" style={{ color: "white" }}>
            Register
          </a>
          <a href="/shop-login" className="" style={{ color: "white" }}>
            轉換至專業用戶
          </a>
        </div>
      </form>
    </div>
  );
}
