import { Avatar, Box, Paper, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { t } from 'i18next';


function ServicesCard(props){
    const theme = useTheme();
    return(
        <Paper 
            sx={{ 
                height: "15rem", 
                width: "25rem", 
                m:"5px",
                p:"10px 30px",
                mx:{xs:'5px', sm:'10px'},
                cursor: "pointer", 
                borderRadius:'15px',
                transition:'0.2s',
                '&:Hover':{transform:'scale(1.05)', },
                backgroundColor: theme.palette.colors.card,
            }}
        >   
            <Box sx={{display:'flex', m:'20px 5px',}}>
                <Avatar alt="Avatar user" src=""/>
                <Typography variant="h6" m="5px 10px">
                    {props.name}
                </Typography>
            </Box>
            <Box align="center" sx={{}}>
                <Typography variant='h6'>
                    {props.text}
                </Typography>
            </Box>
        </Paper>
    );
}

export default function CustomerReview(){
    const theme = useTheme();

    const cardvalue = [
        { id: 1, name: "Mohamed", text: "", },
        { id: 2, name: "Youssef", text: "", },
        { id: 3, name: "Abdo", text: "", },
        { id: 4, name: "Ahmed", text: "لا بجد الخدمات جدية وي ممتازه بس نفسي تفح مزادات زي المواقع الاجنبية", },
        { id: 5, name: "Hend", text: "انا بجد الموقع سعدي كتير في حاجت مكنتش فهماها عن العربيات", },
        { id: 6, name: "Ashraf", text: "اخيرا في حاجة اهتمت بي تفاصيل العربيات", },
    ];

    return (
        <Box 
            sx={{
                my:5,
                minHeight: "20rem",
                width: "100%",
                padding:{xs:'10px', md:'20px',},
                borderRadius: "20px",
               // backgroundColor: theme.palette.colors.grayed,
            }}
        >
            <Typography variant="h4" align="center" sx={{ fontWeight:'700', }}>
                Customer Review
            </Typography>

            <Grid container spacing={2} sx={{ my:5, justifyContent:"center" }}>
                {cardvalue.map((e) => (
                    <Grid xs={6} sm={4} md={3} key={e.id}>
                        <ServicesCard name={e.name} text={e.text}/>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}


