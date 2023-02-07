import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import logo from './logo.png';
import ShopLogout from '../../features/auth/ShopLogout';




function ShopHeader() {


  return (
    <AppBar position="fixed"   style={{backgroundColor:"#FF6B00"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Container className="Userheader__toolbar">

          <Avatar alt="" src={logo} sx={{ width: 80, height: 56 }} variant="square"/>


          <ShopLogout />
          </Container>  

        </Toolbar>



      </Container>
    </AppBar>
  );
}
export default ShopHeader;

