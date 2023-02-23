import "./Login.css";
import React, { useEffect, useState } from "react";
import { loginThunk } from "./authSlice";
import { useAppDispatch } from "../../app/hook";
import { useNavigate, Link } from "react-router-dom";

// password length >= 8

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string | undefined>>({});

  const dispatch = useAppDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }))
      .then(() => navigate("/"))
      .catch((err) => {
        alert(err);
      });
  };

  // 1. useEffect(() => {})
  // 2. useEffect(() => {}, []) -> componentDIdMount
  // 3. useEffect(() => {}, [password])

  useEffect(() => {
    setError((error) => ({
      ...error,
      password: password.length >= 8 ? undefined : "invalid password length",
    }));
  }, [password]);

  return (
    <div className="Login__container Login__customer">
      <form onSubmit={submitHandler}>
        <div className="Login__headerTitle">
          <img src={require("./logo.png")} alt="logo" height={"80rem"} />
          <h3>登入</h3>
        </div>
        <div className="Login__formContent">
          <div className="Login__formRow">
            <label htmlFor="username">電郵地址</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="Login__formRow">
            <label htmlFor="username">密碼</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            ></input>
            {error.password && <p>{error.password}</p>}
          </div>
          <div className="Login__formRow">
            <input
              type="submit"
              value="submit"
              className="Login__customerSubmit"
            ></input>
          </div>
          <Link to="/register" style={{ color: "white" }}>
            登記成爲會員
          </Link>
          <Link to="/shop-login" style={{ color: "white" }}>
            轉換至專業用戶
          </Link>
        </div>
      </form>
    </div>
  );
}
