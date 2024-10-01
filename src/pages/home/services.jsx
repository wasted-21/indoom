import Grid from '@mui/material/Grid2';
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";//Language Controle
import { t } from 'i18next';




function ServicesCard(props){
    const navigate = useNavigate();
    const theme = useTheme();

    return(
        <Paper 
            onClick={() => {navigate(props.link)}}
            sx={{ 
                height: "15rem", 
                width: "12rem", 
                m: "5px",
                mx:{xs:'5px', sm:'10px'},
                cursor: "pointer", 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius:'15px',
                transition:'0.2s',
                '&:Hover':{border:`solid 3px ${theme.palette.info.main}`},
                backgroundColor: theme.palette.colors.card,
            }}
        >
            <Typography variant="h6" align="center">
                {props.title}
            </Typography>
        </Paper>
    );
}

export default function Services(){
    const cardvalue = [
        { id: 1, link: "/service1", title: "Service 1" },
        { id: 2, link: "/service2", title: "Service 2" },
        { id: 3, link: "/service3", title: "Service 3" },
        { id: 4, link: "/service4", title: "Service 4" },
        { id: 5, link: "/service5", title: "Service 5" },
        { id: 6, link: "/service6", title: "Service 6" },

    ];
    return (
        <Box 
            sx={{
                my:5,
                minHeight: "20rem",
                width: "100%",
                padding:{xs:'10px', md:'20px',},
                borderRadius: "20px",
                //backgroundColor: theme.palette.colors.grayed,
            }}
        >
            <Typography variant="h4" align="center" sx={{ fontWeight:'700', }}>
                {t('services')}
            </Typography>

            <Grid container spacing={2} sx={{ my:5, justifyContent:"center" }}>
                {cardvalue.map((e) => (
                    <Grid xs={6} sm={4} md={3} key={e.id}>
                        <ServicesCard link={e.link} title={e.title} />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}
