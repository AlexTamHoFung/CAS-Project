import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import UserHeader from "../../../components/userHeader/UserHeader";
import BottomNav from "../../../features/BottomNav/BottomNav";
import jwt_decode from "jwt-decode";
import moment from "moment";

interface JWTPayload {
  email: string;
  uuid: string;
}

interface Transaction {
  id: number;
  name: string;
  transaction_date: string;
  amount: number;
  payment_method: string;
}

const { REACT_APP_API_BASE } = process.env;

const Record = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    let isMounted = true;
    const token = localStorage.getItem("token")!;
    let payload: JWTPayload = jwt_decode(token);
    console.log(payload.uuid);
    const fetchData = async () => {
      const resp = await fetch(`${REACT_APP_API_BASE}/transactions/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bear ${token}`,
        },
        body: JSON.stringify({ uuid: payload.uuid }),
      });
      const data = await resp.json();
      console.log("data", data.data);

      if (isMounted) {
        setTransactions(data.data);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <UserHeader />
      <br />
      <br />
      <br />

      <Container fixed>
        <h2 style={{ textAlign: "center" }}>交易紀錄</h2>
        {transactions.map((trans, index) => (
          <Card key={index} style={{ marginBottom: 25 }}>
            <CardHeader
              title={trans.name.toUpperCase()}
              subheader={`賺取DOL分: ${trans.amount}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                交易日期: {moment(trans.transaction_date).format("LLL")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trans.payment_method}
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
};

export default Record;
