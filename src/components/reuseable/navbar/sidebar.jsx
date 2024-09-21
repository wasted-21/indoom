import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MailIcon from '@mui/icons-material/Mail';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import BuildIcon from '@mui/icons-material/Build';
import StoreIcon from '@mui/icons-material/Store';
import SellIcon from '@mui/icons-material/Sell';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography, Toolbar, Divider } from '@mui/material';

import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';


export default function Sidebar({setThemes}) {
  //State to open and close sidebar
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  //State to open and close support button in sidebar
  const [open2, setOpen2] = React.useState(false);
  const handleClick = () => {
    setOpen2(!open2);
  };
  
  const theme = useTheme()

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation">
          <Toolbar>
            <IconButton sx={{mr:'auto', ml:'auto',display:'flex',position:'end'}} variant="contained" color="primary" 
            onClick={() => {
              localStorage.setItem("currentMode", theme.palette.mode === 'light' ? 'dark' : 'light')
              setThemes(theme.palette.mode === 'light' ? 'dark' : 'light')
            }}>
                {theme.palette.mode === 'light' ? <Brightness4Icon/> : <Brightness7Icon/>}
            </IconButton>
            <Typography  component="h1" sx={{ flexGrow:1 }}>
              Theme
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          <List
            sx={{ width: '100%', maxWidth: 360, }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>

            <Link to="/comparison" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <CarCrashIcon />
              </ListItemIcon>
              <ListItemText primary="Comparison" />
            </ListItemButton>
            </Link>

            <Link to="/dealer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary="Dealer" />
            </ListItemButton>
            </Link>
            
            <Link to="/workshop" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Workshop" />
            </ListItemButton>
            </Link>

            <Link to="/market" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
            </Link>

            <Divider />

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <HeadsetMicIcon />
              </ListItemIcon>
              <ListItemText primary="Support" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mail" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MarkUnreadChatAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat" />
                </ListItemButton>
              </List>    
            </Collapse>
          </List>

        </Box>
      </Drawer>
    </div>
  );
}
