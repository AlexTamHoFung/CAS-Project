import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BottomNav from "../../../features/BottomNav/BottomNav";
import UserHeader from "../../../components/userHeader/UserHeader";
import moment from "moment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useFetchV3 from "../../../hooks/useFetchV3";
import { Coupon, getCouponApi } from "../../../api/coupon";

export default function Redeem() {
  const {
    data: couponList,
    isLoading,
    error,
  } = useFetchV3<Coupon[]>(getCouponApi);

  if (isLoading) {
    return <div>I am loading...</div>;
  }

  return (
    <div>
      <UserHeader />
      <Container sx={{ marginTop: 10 }} fixed>
        {error && <p>{error}</p>}
        {couponList.map((coupon) => (
          <Card key={`coupon_${coupon.id}`} style={{ marginBottom: 25 }}>
            <CardHeader
              title={coupon.name.toUpperCase()}
              subheader={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>所需DOL分 : ${coupon.points_required}</div>
                  <Button variant="text">換領</Button>
                </Box>
              }
            />
            <CardMedia
              component="img"
              height="200"
              image={`https://loremflickr.com/240/180?random=${coupon.id}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                換領限期: {moment(coupon.valid_start).format("L")} -{" "}
                {moment(coupon.valid_end).format("L")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {coupon.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
      <BottomNav />
    </div>
  );
}
