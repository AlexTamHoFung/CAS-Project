import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from './logo.png';
import Logout from '../../features/auth/Logout';



function ResponsiveAppBar() {


  return (
    <AppBar position="fixed"   style={{backgroundColor:"#FF6B00"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Container className="Userheader__toolbar">

          <Avatar alt="" src={logo} sx={{ width: 80, height: 56 }} variant="square"/>
          </Container>

        <Logout />
        </Toolbar>



      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

