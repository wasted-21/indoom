'use client';
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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import InfoIcon from '@mui/icons-material/Info';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Typography, Toolbar, Divider, Button, } from '@mui/material';
import { Link } from '@/src/navigation'//Link from navigation

//themes && language
import { useTheme } from '@emotion/react';
import {useTranslations} from 'next-intl';


export default function Sidebar() {
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
  
  //Create Themes && Language
  const theme = useTheme();
  const t = useTranslations('header')
  //Check language if arabic
  const isArabic = t('language') === 'ar';

  // Set anchor dynamically based on language
  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon/>
      </IconButton>
      <Drawer 
        anchor={isArabic ? 'right' : 'left'} 
        open={open} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            // Dynamically set 'right' or 'left' based on language direction
            ...(isArabic ? { right: 0, right:'unset' } : { left: 0, left:'unset' })
          }
        }}
      >
        <Box sx={{ width:300, }} role="presentation">
          <Toolbar>
            <Typography component="h1" sx={{ flexGrow: 1 }}>
              {t("menu")}
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link href='/' style={{color:theme.palette.colors.link}}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={t("home")} />
              </ListItemButton>
            </Link>

            <Link href='/carinfo' style={{color:theme.palette.colors.link}}>
              <ListItemButton>
                <ListItemIcon>
                  <CarCrashIcon />
                </ListItemIcon>
                <ListItemText primary={t("carinfo")} />
              </ListItemButton>
            </Link>

            <Link href='/comparison' style={{color:theme.palette.colors.link}}>
              <ListItemButton>
                <ListItemIcon>
                  <CarRepairIcon />
                </ListItemIcon>
                <ListItemText primary={t("comparison")} /> 
              </ListItemButton>
            </Link>

            <Link href='/carservices' style={{color:theme.palette.colors.link}}>
              <ListItemButton>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary={t("carservices")} />
              </ListItemButton>
            </Link>

            <Link href='/dealer' style={{color:theme.palette.colors.link}}>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary={t("dealer")} />
              </ListItemButton>
            </Link>

            <Link href='/carshop' style={{color:theme.palette.colors.link}}>
              <ListItemButton >
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary={t("carshop")} /> 
              </ListItemButton>
            </Link>

            <Link href='' style={{color:theme.palette.colors.link}}>
              <ListItemButton disabled>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary={t("auction")} /> 
              </ListItemButton>
            </Link>

            <Link href='/events' style={{color:theme.palette.colors.link}}>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary={t("event")} /> 
              </ListItemButton>
            </Link>


            <Divider />

              <ListItemButton>
                <ListItemIcon>
                  <SettingsSuggestIcon />
                </ListItemIcon>
                <ListItemText primary={t("services")} /> 
              </ListItemButton>


              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={t("about us")} /> 
              </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <HeadsetMicIcon />
              </ListItemIcon>
              <ListItemText primary={t("support")} />
              {open2 ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("mail")} />
                  </ListItemButton>
                
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MarkUnreadChatAltIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("chat")} />
                  </ListItemButton>
                  <a href="tel:201021123482" style={{color:theme.palette.colors.link}}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("call us")} />
                  </ListItemButton>
                  </a>
    
              </List>    
            </Collapse>
          </List>
        </Box>
        <Box sx={{m:"20px 10px", display:'flex', justifyContent:'space-between'}}>


        </Box>
      </Drawer>
    </>
  );
}
