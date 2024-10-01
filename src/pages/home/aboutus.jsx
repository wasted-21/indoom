import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom'; //Navigate for link
import { t } from 'i18next';

export default function  Aboutus(){
    const navigate = useNavigate();
    const theme = useTheme();
    return(
        <Box sx={{
            my:10,
            p:'20px',
            display:{xs:'block', md:'flex',},
            backgroundColor: theme.palette.colors.grayed,
            //direction: localStorage.lang === 'ar' ? 'rtl' : 'ltr',
        }}>
            <Grid size={{xs:12,}} sx={{p:'20px',}}>
                <Typography variant="h4" sx={{m:"20px",}}>
                    {t('carshop')}
                </Typography>
                <Typography variant="h6" sx={{m:"20px",}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt unde culpa similique nemo accusamus doloribus. Autem dicta quae cum rem libero inventore, harum quasi ipsum sint magnam dolorem provident esse!
                </Typography>

                <Button 
                onClick={() => {navigate("/info")}}
                variant="outlined" 
                sx={{m:"20px", textTransform: 'none', }}
                >
                    {t('more')} 
                </Button>
                    
            </Grid>
            <Grid size={{xs:0, xl:12}}>
                <Box sx={{ display:{xs:'none', xl:'block',},}}>
                    <Box
                        component="img"
                        src="assets/image/pages/home/info.webp"
                        sx={{
                            objectFit: 'cover',
                            width: '100%',
                            height: 'auto',
                            borderRadius:'5px',
                        }}
                        alt="Error Page"
                    />
                </Box>
            </Grid>
        </Box>
    );
}