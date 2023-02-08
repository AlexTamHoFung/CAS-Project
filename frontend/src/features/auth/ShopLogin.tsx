import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="Login__container Login__store">
      <form onSubmit={submitHandler}>
        <div className="Login__headerTitle">
          <img src={require("./logo.png")} alt="logo" height={"80rem"} />
          <h3>商戶登入</h3>
        </div>
        <div className="Login__formContent">
          <div className="Login__formRow">
            <label htmlFor="username">用戶名稱</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            ></input>
          </div>
          <div className="Login__formRow">
            <label htmlFor="shop-username">密碼</label>
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
              className="Login__storeSubmit"
            ></input>
          </div>
          <a href="/login" style={{ color: "white" }}>
            轉換至普通用戶
          </a>
        </div>
      </form>
    </div>
  );
}
