import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./ShopLogin.css";
import { shopLoginThunk } from "./authSlice";
import { useAppDispatch } from "../../app/hook";

export default function ShopLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(shopLoginThunk({ username, password }))
      .unwrap()
      .then(() => navigate("/shop"))
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div id="shop-loginform">
      <form onSubmit={submitHandler}>
        <div className="shop-headerTitle">
          <img src={require("./logo.png")} alt="logo" height={"80rem"} />
          <h3>商戶登入</h3>
        </div>

        <span className="shop-form-row">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="string"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          ></input>
          <label htmlFor="shop-username">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>

          <br />

          <input type="submit" value="submit"></input>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a href="/login" style={{color:"white"}}>轉換至普通用戶</a>
        </span>
      </form>
    </div>
  );
}
