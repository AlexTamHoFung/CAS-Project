import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import { stringify } from 'querystring';
import Container from '@mui/material/Container';

interface Coupon {
  id: number;
  name: string,
  description: string,
  coupon_type: string,
  points_required: number,
  valid_start: Date,
  valid_end: Date,
  company_id: number
}

export default function Home() {
  const [couponList, setCouponList] = useState<Coupon[]>([]);

  // fetch here and update couponList
  useEffect(() => {fetch(`http://localhost:8080/listings/getListing`)}, [couponList]);

  return (
    <div className="App">
      <Container fixed>
        {couponList.map((coupon) => (
          <Card key={`coupon_${coupon.id}`} style={{ marginBottom: 25 }}>
            <CardHeader>{coupon.name}</CardHeader>
            <CardMedia   />
            <CardContent>{coupon.description}</CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}
