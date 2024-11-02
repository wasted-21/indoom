"use client"
import * as React from 'react';
import {useTranslations} from 'next-intl';
import { useTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid2";
import { TextField, Button, Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Otheroptionsign from './otheroptionsign';
import { Link } from '@/src/navigation';




export default function Formsignin(){
    //Handel language/Theme
    const t = useTranslations("sign");
    const theme = useTheme();

    //Handel Password
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    //Handel Submit
    if(1+1==2){

    }else{

    }


    return(
        <Box
        sx={{
            backgroundColor: theme.palette.colors.box,
            borderRadius: '15px',
            overflow: 'hidden',
            width: { xs: '100%', sm: '1000px' },  // تثبيت العرض
            minHeight: '400px',  // تثبيت ارتفاع مبدئي
            //maxHeight: '600px',
        }}
        >
        <Grid container spacing={5} sx={{p:5,}}> 
            <Grid size={{xs:12, md:6}}>
                <Typography variant="h5" sx={{ color: 'inheart', fontWeight: '700' }}>
                {t('signin')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'inheart', mt:2 }}>
                {t('')}
                </Typography>
                <Box sx={{display:{xs:'none', md:'block'}}}>
                    <Otheroptionsign/>
                </Box>
            </Grid>
            <Grid size={{xs:12, md:6}}>
                <Grid size={12}>
                    <TextField
                        autoFocus
                        fullWidth
                        margin="dense"
                        type="email"
                        id="otp"
                        label={t("email")}
                        variant="outlined"
                        
                    />
                </Grid>
                <Grid size={12}>
                    <FormControl fullWidth margin="dense" variant="outlined">
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
                </Grid>
                <Grid size={12}>
                    <Box sx={{display:'flex', justifyContent:'space-between', my:'10px'}}>
                        <Link
                        href='/auth/signup' 
                        style={{textTransform:'none', color:'green', }}
                        >
                        {t('create new account')}
                        </Link>
                        <Link 
                        href='/auth/forgotpassword' 
                        style={{textTransform:'none', color:theme.palette.colors.text, }}
                        >
                        {t('forgot password')}
                        </Link>
                    </Box>
                </Grid>
                <Grid size={12}>
                    <Button
                    variant="contained"
                    sx={{ textTransform:'none', fontSize:'15px', fontWeight:'600', width:'100%', mt:2 }}
                    >
                    {t("submit")}
                    </Button>
                </Grid>
                <Box sx={{display:{xs:'block', md:'none'}}}>
                    <Otheroptionsign/>
                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}