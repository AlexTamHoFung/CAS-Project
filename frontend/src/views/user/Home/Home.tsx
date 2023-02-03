import * as React from "react";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import BottomNav from "../../../features/BottomNav/BottomNav";
import UserHeader from "../../../components/userheader/UserHeader";
import dayjs from "dayjs";


interface Companies {
  id: number;
  name: string;
  category: string;
  coupon_type: string;
}


const { REACT_APP_API_BASE } = process.env;

export default function Home() {
  const [shopList, setShopList] = useState<Companies[]>([]);

  // fetch here and update shopList
  useEffect(() => {
    fetch(`${REACT_APP_API_BASE}/companies/showCompany`)
      .then((resp) => resp.json())
      .then((data) => setShopList(data));
  }, [shopList]);

  return (
    <div className="App">
      <UserHeader />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container fixed>
        {couponList.map((coupon) => (
          <Card key={`coupon_${coupon.id}`} style={{ marginBottom: 25 }}>
            <CardHeader
              title={shop.name.toUpperCase()}
              subheader={`Reuired Points: ${shop.name}`}
            />
            <button
              style={{ backgroundColor: "rgb(0, 202, 0)", color: "white" }}
            >
              Add to cart
            </button>

            <CardMedia
              component="img"
              height="200"
              image={`https://loremflickr.com/240/180?random=${shop.id}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Date: {shop.name} - {shop.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {shop.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <p>暫未有其他優惠</p>
      <br />
      <br />
      <br />
      <br />
      <BottomNav />
    </div>
  );
}
