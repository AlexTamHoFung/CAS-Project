import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hook";


export default function PrivateShopRoute() {
  const isShopAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();
  

  if (!isShopAuth) {
    return <Navigate to="/shop-login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

