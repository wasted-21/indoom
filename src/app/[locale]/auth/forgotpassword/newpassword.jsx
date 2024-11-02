

"use client";
import { FormControl, InputLabel, IconButton, InputAdornment, OutlinedInput, TextField, Button, Typography, Box, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import Otheroptionsign from "../signin/otheroptionsign";
import { useState } from "react";

// Language
import {useTranslations} from 'next-intl';

export default function Newpassword({ formData }){
  const t = useTranslations('sign');

  // Password handling
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  //Check password with confirm password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false); // حالة للتحقق من الخطأ

  // استخدام useEffect للتحقق من تطابق كلمة المرور
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleSubmit = async () => {
    // Ensure all fields are filled
    if (!formData.email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  };

  return(
    <Grid container spacing={5} sx={{p:5,}}> 
      <Grid size={{xs:12, md:6}}>
        <Typography variant="h5" sx={{ color: 'inheart', fontWeight: '700' }}>
          {t('recovery password')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'inheart', mt:2 }}>
          {t('create new password')}
        </Typography>
      </Grid>
      <Grid size={{xs:12, md:6}}>   
        <Grid container>
          <Grid size={12}>
            <FormControl fullWidth margin="dense" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{t("new password")}</InputLabel>
              <OutlinedInput
                id="password1"
                type={showPassword ? 'text' : 'password'}
                label={t("new password")}
                error={error}
              />
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth margin="dense" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{t("confirm password")}</InputLabel>
              <OutlinedInput
                id="password2"
                type={showPassword ? 'text' : 'password'}   
                label={t("confirm password")}
                error={error}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid size={12}>
          <IconButton disableRipple
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
            <Typography variant="body1" color="inheart" ml={1}>{t("show password")}</Typography>
          </IconButton>
        </Grid>
        <Grid size={12}>
            <Button
              onClick={handleSubmit}            
              variant="contained"
              sx={{ textTransform:'none', fontSize:'15px', fontWeight:'600', width:'100%', mt:2 }}
            >
            {t("submit")}
            </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}