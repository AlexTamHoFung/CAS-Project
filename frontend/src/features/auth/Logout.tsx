import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../app/store";
import { logout } from "./authSlice"
export default function Logout() {

  
    const isAuthenticated = useSelector(
      (state: IRootState) => state.auth.isAuth
    );
    const dispatch = useDispatch();
  
    const clickLogout = () => {
      dispatch(logout());
    };
  
    return (
      <div className="logout-bar">
        {isAuthenticated ? (
          <Button style={{color:"white", backgroundColor:"orange"}}  onClick={clickLogout}>
            Logout
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  }