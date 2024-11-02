"use client";
import * as React from 'react';
import { IconButton, Avatar, Box, Typography, Button, Divider, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import { Visibility, VisibilityOff } from '@mui/icons-material';

//Themes
import { useTheme } from '@mui/material/styles';
// Link Navigation for language
import { Link } from '@/src/navigation'
import {useTranslations} from 'next-intl';


export default function ResponsiveDialog() {

  const theme = useTheme();
  const t = useTranslations('sign')

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false); // حالة للتحقق من الخطأ

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Handel Password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  //Handel submit button
  const [formData, setFormData] = React.useState({
    email:'',
    password:'',
  });
  const handelsubmit = () => {
    if (!formData.email || !formData.password ) {
      setError("All fields are required.");
      return;
    }
  }

  return (
    <React.Fragment>
      <IconButton
      onClick={handleClickOpen}
      size="small"
      sx={{ mx: 1 }}
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}/>
      </IconButton>
      <Dialog 
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
      <DialogContent>
        <Box sx={{xs:0, md:3}}>
          <Box sx={{display:'flex', justifyContent:'space-between', mb:5}}>
            <Typography variant="h5" sx={{color:'inheart', fontWeight:800, mt:'5px'}}>{t("signin")}</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <TextField 
              autoFocus 
              fullWidth 
              margin="dense" 
              type='email' 
              id="email" 
              label={t('email')} 
              variant="outlined"
              error={error}
            />       

            <FormControl error={error} fullWidth margin="dense" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{t("password")}</InputLabel>
                <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position="end">
                  <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                }
                label="Password"
              />
           </FormControl>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', my:'10px'}}>
            <Link 
            href='/auth/signup' 
            style={{textTransform:'none', color:'green', }}
            onClick={handleClose}
            >
              {t('create new account')}
            </Link>
            <Link 
              href='/auth/forgotpassword' 
              style={{textTransform:'none', color:theme.palette.colors.text, }}
              onClick={handleClose}
            >
              {t('forgot password')}
            </Link>
          </Box>
          <Box sx={{my:'20px'}}>
            <Button 
              onClick={handelsubmit}
              variant='contained'
              sx={{textTransform:'none',width:'100%'}}
              >
                {t("submit")}
              </Button>
          </Box>
          <Divider>{t("other option")}</Divider>
          <Box sx={{my:'20px',display:'flex', justifyContent:'space-evenly'}}>
            <Button sx={{textTransform:'none', width:'50%', p:'12px 0'}}>
              <GoogleIcon sx={{color:'gray', mr:'5px'}}/>{t("continue with google")}
            </Button>
            <Button sx={{textTransform:'none', width:'50%', p:'12px 0'}}>
              <AppleIcon sx={{color:'gray', mr:'5px'}}/>{t("continue with apple")}
            </Button>
          </Box>
        </Box>
      </DialogContent>

      </Dialog>
    </React.Fragment>
  );
}









/*
*/