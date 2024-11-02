"use client";
import { Box, Button, Divider, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {useTranslations} from 'next-intl';// Language
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

export default function Otheroptionsign() {
  // Language
  const t = useTranslations('sign');
  return (
    <Grid>
      <Divider sx={{m:"50px 0px"}}>{t("other option")}</Divider>
      <Box sx={{my:'20px',display:'flex', justifyContent:'space-evenly'}}>
        <Button sx={{textTransform:'none', width:'50%', p:'12px 0'}}>
          <GoogleIcon sx={{color:'gray', mr:'5px'}}/>{t("continue with google")}
        </Button>
        <Button sx={{textTransform:'none', width:'50%', p:'12px 0'}}>
          <AppleIcon sx={{color:'gray', mr:'5px'}}/>{t("continue with apple")}
        </Button>
      </Box>
    </Grid>
  );
}
