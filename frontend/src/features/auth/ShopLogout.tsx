import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../app/store";
import { shopLogout } from "./authSlice"
export default function Logout() {

  
    const isAuthenticated = useSelector(
      (state: IRootState) => state.auth.isShopAuth
    );
    const dispatch = useDispatch();
  
    const clickLogout = () => {
      dispatch(shopLogout());
    };
  
    return (
      <div className="logout-bar">
        {isAuthenticated ? (
          <Button style={{color:"white", backgroundColor:"orange", textTransform:"unset" }}  onClick={clickLogout}>
            Logout
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  }