import React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { flexbox } from "@mui/system";
// import Header from "../../../features/Header/Header";
import BottomNav from "../../../features/BottomNav/BottomNav";
import UserHeader from "../../../components/userHeader/UserHeader";

interface Coupon {
  id: number;
  name: string;
  description: string;
  coupon_type: string;
  points_required: number;
  valid_start: string;
  valid_end: string;
  company_id: number;
}
const { REACT_APP_API_BASE } = process.env;
export default function Redeem() {
  const [couponList, setCouponList] = useState<Coupon[]>([]);

  // fetch here and update couponList
  useEffect(() => {
    fetch(`${REACT_APP_API_BASE}/listings/getListing`)
      .then((resp) => resp.json())
      .then((data) => setCouponList(data));
  }, [couponList]);
  return (
    <div>
      <UserHeader />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container fixed>
        {couponList.map((coupon) => (
          <Card key={`coupon_${coupon.id}`} style={{ marginBottom: 25 }}>
            <CardHeader
              title={coupon.name.toUpperCase()}
              subheader={`Reuired Points: ${coupon.points_required}`}
            />
            <button
              style={{  color: "black" }}
            >
              Redeem
            </button>


            <CardMedia
              component="img"
              height="200"
              image={`https://loremflickr.com/240/180?random=${coupon.id}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Date: {coupon.valid_start} - {coupon.valid_end}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {coupon.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BottomNav />
    </div>
  );
}
