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
import CarRepairIcon from '@mui/icons-material/CarRepair';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import InfoIcon from '@mui/icons-material/Info';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Typography, Toolbar, Divider, Button } from '@mui/material';

import { Link } from 'react-router-dom';//Import Link
import { useTheme } from '@emotion/react';//Import Theme
import { ThemeModeContext } from '../../theme/theme'; // Import the context
import { useTranslation } from 'react-i18next'; // Language Translate
import LanguageIcon from '@mui/icons-material/Language';


export default function Sidebar() {
  // State to open and close sidebar
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // State to open and close support button in sidebar
  const [open2, setOpen2] = React.useState(false);
  const handleClick = () => {
    setOpen2(!open2);
  };
  
  //Themes
  const theme = useTheme();
  const { setMode } = React.useContext(ThemeModeContext); // Use the context to get setMode

  //Language
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // تغيير اللغة باستخدام i18n
    localStorage.setItem('lang', lng); // حفظ اللغة المختارة في localStorage
  };

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
            <Typography component="h1" sx={{ flexGrow: 1 }}>
              Menu
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
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={t('home')} />
              </ListItemButton>
            </Link>
            <Link to="/carinfo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <CarCrashIcon />
                </ListItemIcon>
                <ListItemText primary={t('carinfo')} />
              </ListItemButton>
            </Link>
            <Link to="/comparison" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <CarRepairIcon />
                </ListItemIcon>
                <ListItemText primary={t('comparison')} /> 
              </ListItemButton>
            </Link>
            <Link to="/workshop" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary={t('workshop')} />
              </ListItemButton>
            </Link>
            <Link to="/deaer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary={t('dealer')} />
              </ListItemButton>
            </Link>
            <Link to="/carshop" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton disabled>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary={t('carshop')} /> 
              </ListItemButton>
            </Link>
            <Link to="/auctions" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton disabled>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary={t('auctions')} /> 
              </ListItemButton>
            </Link>
            
            <Divider />

            <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsSuggestIcon />
                </ListItemIcon>
                <ListItemText primary={t('services')} /> 
              </ListItemButton>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={t('about')} /> 
              </ListItemButton>
            </Link>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <HeadsetMicIcon />
              </ListItemIcon>
              <ListItemText primary={t('support')} />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/supportmail" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('mail')} />
                  </ListItemButton>
                </Link>
                <Link to="/supportchat" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MarkUnreadChatAltIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('chat')} />
                  </ListItemButton>
                </Link>
              </List>    
            </Collapse>
          </List>

          <Box 
            sx={{
              position: 'fixed',
              bottom: 10,
              left: 10,
              display: 'flex',
          }}>
            {/* Theme Toggle Button */}
            <IconButton 
              variant="contained" 
              color="primary"
              onClick={() => {
                localStorage.setItem("currentMode", theme.palette.mode === 'light' ? 'dark' : 'light');
                setMode(theme.palette.mode === 'light' ? 'dark' : 'light');
              }}
            >
              {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>

            {/* Language Toggle Button */}
            <Button
              onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              sx={{textTransform: 'none',}}
            >
              <LanguageIcon sx={{mr:'10px'}}/>
              {i18n.language === 'ar' ? 'English' : 'عربي'}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
