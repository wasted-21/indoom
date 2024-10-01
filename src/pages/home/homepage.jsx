
//Import Mui
import { Box, } from "@mui/material";
import Grid from '@mui/material/Grid2';

//Import Swiper
import Swipper from "./swiper";
import Info from "./info";
import Services from "./services";
import Aboutus from "./aboutus";
import CustomerReview from "./customer_review";
import { useTranslation } from "react-i18next";

export default function HomePage(){
   const lang = useTranslation();
    return(
        <Box sx={{
            mb:5,
            px:{xs:0, sm:5, md:10, lg:20},
            minHeight:'100vh',
        }}>
            <Grid container spacing={2} sx={{direction: localStorage.lang === 'ar' ? 'rtl' : 'ltr',}}>            
                <Grid size={12}>
                    <Swipper/>
                </Grid>
                <Grid size={12}>
                    <Info/>
                </Grid>
                <Grid size={12}>
                    <Aboutus/>
                </Grid>
                <Grid size={12}>
                    <Services/>
                </Grid>
                <Grid size={12}>
                    <CustomerReview/>
                </Grid>
            </Grid>
        </Box>
    );
}