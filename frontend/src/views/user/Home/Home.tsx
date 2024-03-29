import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BottomNav from "../../../features/BottomNav/BottomNav";
import UserHeader from "../../../components/userheader/UserHeader";
import moment from "moment";



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
  }, []);
  
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
            <button onClick={() =>{console.log('redeem')}}
              style={{
                backgroundColor: "red",
                color: "white",
                float: "right",
                marginTop: "30px",
                marginRight: "5%",
                width: "120px",
                height: "30px",
                borderRadius: "6px"
              }}
            >
              換領
            </button>{" "}

            <CardHeader 
              title={coupon.name.toUpperCase()}
              subheader={`所需DOL分 : ${coupon.points_required}`}
            />

            <CardMedia
              component="img"
              height="200"
              image={`https://loremflickr.com/240/180?random=${coupon.id}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                換領限期: {moment(coupon.valid_start).format('L')} - {moment(coupon.valid_end).format('L')}
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
