import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "./shopHook";


export default function PrivateShopRoute() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/shop-login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

