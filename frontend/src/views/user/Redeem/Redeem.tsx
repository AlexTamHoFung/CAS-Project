import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Container from "@mui/material/Container";
import BottomNav from "../../../features/BottomNav/BottomNav";
import UserHeader from "../../../components/userheader/UserHeader";
import { Typography } from "@mui/material";

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

      <Container fixed>
        <h2 style={{ textAlign: "center" }}>換領優惠卷</h2>
        {couponList.map((coupon) => (
          <Card key={`coupon_${coupon.id}`} style={{ marginBottom: 25 }}>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                float: "right",
                marginTop: "30px",
                marginRight: "5%",
                width: "120px",
                height: "30px",
                borderRadius: "6px",
              }}
            >
              Redeem
            </button>{" "}
            <CardHeader
              title={coupon.name.toUpperCase()}
              subheader={`Reuired Points: ${coupon.points_required}`}
            />
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
