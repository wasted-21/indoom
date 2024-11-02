




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
            align='start'
            onClick={() => {route.push(props.link)}}
            sx={{ 
                height: "5rem", 
                width: "12rem",
                p:'10px',
                m: "10px",
                cursor: "pointer",
                flexWrap:'wrap',
                borderRadius:'15px',
                transition:'0.5s',
                '&:hover': {
                    background: theme.palette.colors.cardhover,
                    transform: 'scale(1.01)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Adjusted opacity
                },
            }}
        >
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Box sx={{height:'3rem', width:'3rem', mt:1}}>
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
            
            <Typography variant="body1" sx={{mt:1, mx:1}}>
                {props.title}
            </Typography>
        </Box>
        </Paper>
    );
}

export default function Findcar(){
    const t = useTranslations('homepage')
    const cardvalue = 
    [
        { id: 1, link: "/carinfo/abarth", images: "/image/carbrand/Abarth.png", title: "Abarth", },
        { id: 2, link: "/carinfo/acura", images: "/image/carbrand/Acura.png", title: "Acura",},
        { id: 3, link: "/carinfo/alfaromeo", images: "/image/carbrand/alfaromeo.png", title: "Alfa Romeo", },
        { id: 4, link: "/carinfo/astonmartin", images: "/image/carbrand/astonmartin.png", title: "Aston Martin",},
        { id: 5, link: "/carinfo/audi", images: "/image/carbrand/audi.png", title: "Audi", },
        { id: 6, link: "/carinfo/bentley", images: "/image/carbrand/bentley.png", title: "Bentley", },
        { id: 7, link: "/carinfo/bmw", images: "/image/carbrand/bmw.png", title: "BMW", },
        { id: 8, link: "/carinfo/bugatti", images: "/image/carbrand/bugatti.png", title: "Bugatti",},
        { id: 9, link: "/carinfo/buick", images: "/image/carbrand/Buick.png", title: "Buick", },
        { id: 10, link: "/carinfo/cadillac", images: "/image/carbrand/Cadillac.png", title: "Cadillac",},
        { id: 11, link: "/carinfo/chevrolet", images: "/image/carbrand/chevrolet.png", title: "Chevrolet", },
        { id: 12, link: "/carinfo/chrysler", images: "/image/carbrand/Chrysler.png", title: "Chrysler", },
    ];

    return (
        <Box 
            sx={{
                my:10,
                minHeight: "20rem",
                width: "100%",
                padding:{xs:'10px', md:'20px',},
            }}
        >
            <Typography variant="h4" align="center" sx={{ fontWeight:'700', }}>
                {t("findcar")}
            </Typography>
            <Grid container spacing={1}  sx={{my: 5, display:'flex', justifyContent:'center', alignItems:'center'}}>
                {cardvalue.map((e) => (
                    <Grid  key={e.id}>
                        <ServicesCard link={e.link} images={e.images} title={e.title} subtitle={e.subtitle} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
