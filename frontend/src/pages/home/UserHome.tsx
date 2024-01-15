import React from "react";
import logo from '../logo.png'
import "./UserHome.css";

import { Layout, Input, Button } from "antd";
import {useParams, useLocation, useNavigate} from "react-router-dom"
import UserHeader from "../../components/userheader/UserHeader";

export default function UserHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return (
    <div className="app">
      <div className="App-header">

        <Layout.Header className="main-header">

          <UserHeader/>
        </Layout.Header>

        <Layout.Footer>
          <Button.Group className="user-footer">
            <div className="footer">
              <ul>
                <li>Home</li>
                <li>Record</li>
                <li>Scan</li>
                <li>Redeem</li>
                <li>Profile</li>
              </ul>
            </div>
          </Button.Group>
        </Layout.Footer>
      </div>
    </div>
  );
}
