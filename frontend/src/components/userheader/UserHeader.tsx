import React from 'react'
import logo from './logo.png'
import './UserHeader.css'

import { Layout, Input, Button } from "antd";
import {useParams, useLocation, useNavigate} from "react-router-dom"

export default function UserHeader() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const params = useParams();

  return (
    <div>
      <div className="App-header">

        <Layout.Header className="main-header">

        <span onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="App-logo" />
        </span>



          <Input.Search placeholder={"Searching"} className="search-input" />

          <Button.Group className="button-group">
            <Button onClick={() => navigate("/register")}>註冊</Button>
            <Button onClick={() => navigate("/login")}>登入</Button>
          </Button.Group>
        </Layout.Header>

      </div>
    </div>
  );
}
