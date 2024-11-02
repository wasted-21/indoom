'use client'
import { Box, Typography, IconButton, Divider, Button,} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


//Footer Components
export default function Footer() {
  const t = useTranslations('footer');
  
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        borderTop: 'solid 1px',
      }}
    >
        <Grid container sx={{px:{xs:3, md:10},}}>
          <Grid size={{xs:12, sm:6, md:5}}>
            <Box >
              <Typography variant="h4" gutterBottom>
                {t("indoom")}
              </Typography>
              <Typography variant='body2' sx={{mr:{xs:5, md:10}, }}>
                {t('subtitle')}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{xs:6, sm:3, md:2}}>
            <Box sx={{mt:{xs:'20px', sm:0,}, }}>
              <Typography variant="h6" gutterBottom>
                {t("link")}
              </Typography>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("carinfo")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("comparison")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("carservices")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("carshop")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("dealer")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit', }}
                    href='/'
                  > 
                    {t("events")}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{xs:6, sm:3, md:2}}>
            <Box sx={{mt:{xs:'20px', sm:0,}, }}>
              <Typography variant="h6" gutterBottom>
                {t("helps")} 
              </Typography>
              <Box sx={{display:"flex", flexDirection:"column"}}>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("services")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("aboutus")}
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{marginTop:3, color:'inherit'}}
                    href='/'
                  > 
                    {t("support")}
                  </Link>
                </Box>
                <Box>
                  <a
                    style={{ marginTop: 3, color: 'inherit' }}
                    href='tel:01021123482'
                  > 
                    {t("callus")}
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid container size={{xs:12, md:3}}>
            <Grid size={{xs:12, sm:6, md:12}}>
              <Typography variant="h6" gutterBottom>
              {t("socialmedia")}
              </Typography>
              <IconButton
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                sx={{color:'inherit', }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                sx={{color:'inherit', }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com"
                target="_blank" 
                sx={{color:'inherit', }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com"
                target="_blank"
                sx={{color:'inherit', }}
                aria-label="Youtube"
              >
                <YouTubeIcon />
              </IconButton>
            </Grid>
            <Grid size={{xs:12, sm:6, md:12}}>
              <Typography variant="h6"  gutterBottom>
                {t("application")}
              </Typography>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                <Button variant='outlined' color='inheirt' sx={{height:50, width:180}}>
                  <Box sx={{height:'20px',width:'20px'}}>
                  <Box
                      component="img"
                      src='/image/component/googleplay.png'
                      sx={{
                          objectFit: 'contain',
                          width: '100%',
                          height: '100%',
                      }}
                    />
                  </Box>
                  <Box sx={{mx:1}}>
                    <Typography sx={{fontSize:'10px',}} align='start'>{t("get it on")}</Typography>
                    <Typography variant="body1" >Google play</Typography>
                  </Box>
                </Button>
                <Button variant='outlined' color='inheirt' sx={{height:50, width:180,mt:2}}>
                  <Box sx={{height:'20px',width:'20px'}}>
                  <Box
                      component="img"
                      src='/image/component/appstore.png'
                      sx={{
                          objectFit: 'contain',
                          width: '100%',
                          height: '100%',
                      }}
                    />
                  </Box>
                  <Box sx={{mx:1}}>
                    <Typography sx={{fontSize:'10px',}} align='start'>{t("get it on")}</Typography>
                    <Typography variant="body1" >App Store</Typography>
                  </Box>
                </Button>
              </Box>

            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{my:3, mx:1}} />

        <Grid container spacing={2} align="center">
          <Grid size={{xs:12, md:6}}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Developed by Mohamed Ashraf.
            </Typography>
          </Grid>
          <Grid size={{xs:12, md:6}}>
              <Link
                href='/terms' 
                style={{margin:'0 20px',  fontSize:'15px', color:'inherit', borderBottom:'1px solid'}}              
              >
                Terms
              </Link>
              <Link
                href='/Privacy' 
                style={{margin:'0 20px',  fontSize:'15px', color:'inherit', borderBottom:'1px solid'}}              
              >
                Privacy
              </Link>
              <Link
                href='/Cookies' 
                style={{margin:'0 20px',  fontSize:'15px', color:'inherit', borderBottom:'1px solid'}}
              >
                Cookies
              </Link> 
          </Grid>
        </Grid>
        
    </Box>
  );
}
