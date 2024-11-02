import { Box, Button, Divider, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {useTranslations} from 'next-intl';// Language

import { Link } from "@/src/navigation";

export default function Signin() {
  // Language
  const t = useTranslations('sign');
  return (
    <Grid>
      <Divider sx={{m:"50px 0px"}}>{t("already have account")}</Divider>
      <Box sx={{my:'20px',display:'flex', justifyContent:'space-evenly'}}>
        <Button sx={{textTransform:'none', width:'100%', p:'12px 0'}}>
          {t("signin")}
        </Button>
      </Box>
    </Grid>
  );
}
