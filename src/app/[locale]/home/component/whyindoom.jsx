'use client';
import Grid from '@mui/material/Grid2';
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useTranslations } from 'next-intl';
import { useRouter } from '@/src/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


function ServicesCard(props){
    const theme = useTheme();
    const t = useTranslations('homepage')
    const route = useRouter()
    return(
        <Paper 
            onClick={() => {route.push(props.link)}}
            sx={{ 
                height: "20rem", 
                width: {xs:'20rem', md:'15rem'},
                p:'10px',
                m: "10px",
                cursor: "pointer",
                flexWrap:'wrap',
                borderRadius:'15px',
                transition:'0.5s',
                '&:hover': {
                    background: theme.palette.colors.cardhover,
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Adjusted opacity
                },
            }}
        >
       
            <Box sx={{height:"50%",mt:1 ,}}>
                <Box
                component="img"
                src={props.images}
                sx={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    borderRadius:'15px',
                }}
                />
            </Box>
            <Box align='center' sx={{mt:1}}>
                <Typography variant="h6">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.subtitle}
                </Typography>
            </Box>
        </Paper>
    );
}

export default function Whyindoom(){
    const theme = useTheme();
    const t = useTranslations('homepage')
    const cardvalue = 
    [
        { id: 1, link: "/carinfo", images: "/image/pages/home/carinfo.png", title: t('whyindoom.carinfo title'), subtitle: t('whyindoom.carinfo subtitle'),},
        { id: 2, link: "/comparison", images: "/image/pages/home/comparison.png", title: t('whyindoom.comparison title'), subtitle: t('whyindoom.comparison subtitle'),},
        { id: 3, link: "/carservices", images: "/image/pages/home/carservices.png", title: t('whyindoom.carservices title'), subtitle: t('whyindoom.carservices subtitle'),},
        { id: 4, link: "/dealer", images: "/image/pages/home/dealer.png", title: t('whyindoom.dealer title'), subtitle: t('whyindoom.dealer subtitle'),},
        { id: 5, link: "/carshop", images: "/image/pages/home/carshop.png", title: t('whyindoom.carshop title'), subtitle: t('whyindoom.carshop subtitle'),},
        { id: 6, link: "/events", images: "/image/pages/home/events.png", title: t('whyindoom.events title'), subtitle: t('whyindoom.events subtitle'),},
    ];

    return (
        <Box 
            sx={{
                my:10,
                minHeight: "20rem",
                width: "100%",
                padding:{xs:'10px', md:'20px',},
                backgroundColor: theme.palette.colors.box,
            }}
        >
            <Typography variant="h4" align="center" sx={{ fontWeight:'700', }}>
                {t("whyindoom.whyindoom")}
            </Typography>

            {/* Swiper for small screens */}
            <Box sx={{display: { xs: 'flex', md: 'none' }, justifyContent:'center', alignItems:'center'}}>
                <Swiper
                    align='center'
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {cardvalue.map((e) => (
                        <SwiperSlide key={e.id}>
                            <ServicesCard link={e.link} images={e.images} title={e.title} subtitle={e.subtitle} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* Fallback for larger screens */}
            <Box sx={{display: { xs: 'none', md: 'flex' }, justifyContent:'center', alignItems:'center'}}>
                <Grid container spacing={2}  sx={{my: 5, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {cardvalue.map((e) => (
                        <Grid  key={e.id}>
                            <ServicesCard link={e.link} images={e.images} title={e.title} subtitle={e.subtitle} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}