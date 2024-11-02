import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/src/navigation';


export default function Aboutus(){
    const t = useTranslations('homepage');
    return(
        <Box
            sx={{display:{xs:'block', lg:'flex'}, justifyContent:'center'}}
        >
            <Box sx={{width:{xs:'100%', lg:'50%',}, maxHeight:{lg:'25rem', xl:'30rem'}, }}>
                <Box
                component="img"
                src="/image/pages/home/aboutus.webp"
                sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                }}
                alt="About us image"
                />
            </Box>
            <Box sx={{width:{xs:'100%', lg:'50%'} }}>
                <Typography variant="h4" sx={{m:"10px",}}>
                    {t('aboutus')}
                </Typography>
                <Typography variant="h6" sx={{m:"10px",}}>
                    {t('aboutus info')}
                </Typography>
                <Button
                    
                    variant="outlined" 
                    sx={{m:"10px", textTransform: 'none', }}
                >
                <Link href="/aboutus" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                    {t('read more')}
                </Link>
                </Button>    
            </Box>
        </Box>
    )
}