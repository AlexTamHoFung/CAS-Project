import * as React from "react";
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
import BottomNav from "../../../features/BottomNav/BottomNav";
import Header from "../../../features/Header/Header";

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
      <Header />
      <Container fixed>
        {shopList.map((shop) => (
          <Card key={`shop_${shop.id}`} style={{ marginBottom: 25 }}>
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
      <BottomNav />
    </div>
  );
}
