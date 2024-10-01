import { Box, Button, Typography, } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom'; //Navigate for link
import { t } from 'i18next';

export default function Info(){
    const navigate = useNavigate();
    return(
        <Box sx={{
            my:5,
            display:{xs:'block', md:'flex'},
            //direction: localStorage.lang === 'ar' ? 'rtl' : 'ltr',
        }}>
            <Grid size={{xs:12, sm:12,}}>
                <Box
                    component="img"
                    src="assets/image/pages/home/info.webp"
                    sx={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius:'20px',
                    }}
                    alt="Error Page"
                />
            </Grid>
            <Grid size={{xs:12,}}>
                <Typography variant="h4" sx={{m:"10px",}}>
                    {t('carshop')}
                </Typography>
                <Typography variant="h6" sx={{m:"10px",}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt unde culpa similique nemo accusamus doloribus. Autem dicta quae cum rem libero inventore, harum quasi ipsum sint magnam dolorem provident esse!
                </Typography>
                <Button 
                onClick={() => {navigate("/info")}}
                variant="outlined" 
                sx={{m:"10px", textTransform: 'none', }}
                >
                    {t('more')} 
                </Button>
                    
            </Grid>
        </Box>
    );
}