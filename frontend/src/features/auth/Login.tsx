import React, { useState } from "react";
import { loginThunk } from "./authSlice";
import { useAppDispatch } from "../../app/hook";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

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
    <div id="loginform">
      <form onSubmit={submitHandler}>

        <div className="headerTitle">
        <img src={require('./logo.png')} alt="logo" height={"80rem"}/>
        <h3 >Login</h3>

        </div>

        <span className="form-row">
          <label htmlFor="username">Email</label>
          <input
            id="email"
            type="string"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></input>
          <label htmlFor="username">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>
          

          <br/>

          <input type="submit" value="submit"></input>
        </span>
      </form>
    </div>
  );
}
