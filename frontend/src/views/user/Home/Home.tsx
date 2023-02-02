import * as React from "react";
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
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { flexbox } from "@mui/system";

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

export default function Home() {
  const [couponList, setCouponList] = useState<Coupon[]>([]);

  // fetch here and update couponList
  useEffect(() => {
    fetch(`http://localhost:8080/listings/getListing`)
      .then((resp) => resp.json())
      .then((data) => setCouponList(data));
  }, [couponList]);

  return (
    <div className="App">
      <Container fixed>

      


        {couponList.map((coupon) => (
          <Card key={`coupon_${coupon.id}`} style={{ marginBottom: 25 }}>
            <CardHeader
              title={coupon.name.toUpperCase()}
              subheader={`Reuired Points: ${coupon.points_required}`}
            />
            <button style={{backgroundColor: "green", color: "white" }}>Add to cart</button>

            <CardMedia component="img" height="200" image={`https://loremflickr.com/240/180?random=${coupon.id}`}/>
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
    </div>
  );
}
