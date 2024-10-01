// Import React Router Link
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, IconButton, Divider, Link, Button, } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles'; // Import Theme
import Grid from '@mui/material/Grid2';


//Footer Components
export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        py: 2,
        borderTop: `solid 2px ${theme.palette.divider}`,
      }}
    >
        <Grid container sx={{px:{xs:3, md:10},}}>
          <Grid size={{xs:12, sm:6, md:5}}>
            <Box sx={{px:{sm:3,md:5},}}>
              <Typography variant="h4" gutterBottom>
                indoom
              </Typography>
              <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores aperiam consectetur saepe, a officiis magni quis delectus deserunt, maxime, animi quo? 
                Nesciunt molestias voluptates illo omnis ex ipsam soluta esse.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{xs:6, sm:3, md:2}}>
            <Box sx={{mt:{xs:'20px', sm:0,}, }}>
              <Typography variant="h6" gutterBottom>
                Link
              </Typography>
              <Box sx={{display:"flex", flexDirection:"column"}}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              </Box>
            </Box>
          </Grid>
          <Grid size={{xs:6, sm:3, md:2}}>
            <Box sx={{mt:{xs:'20px', sm:0,}, }}>
              <Typography variant="h6" gutterBottom>
                Link 
              </Typography>
              <Box sx={{display:"flex", flexDirection:"column"}}>
              <Link
                component={RouterLink}
                to="/feedback"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                variant='body2'
                mt={1}
              >
                Home
              </Link>
              </Box>
              
            </Box>
          </Grid>
          <Grid size={{xs:12, sm:12, md:3}}>
            <Box 
              sx={{
                display:{xs:'flex', sm:'flex', md:'block'},
                justifyContent: {xs:'space-between', sm:'space-around'},
              }}>
              <Box sx={{mt:{xs:'20px',md:0,},}}>
                <Typography variant="h6" gutterBottom>
                  Social Media
                </Typography>
                <IconButton
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                  sx={{ color: theme.palette.text.primary }}
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com"
                  target="_blank"
                  sx={{ color: theme.palette.text.primary }}
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.twitter.com"
                  target="_blank"
                  sx={{ color: theme.palette.text.primary }}
                  aria-label="Twitter"
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com"
                  target="_blank"
                  sx={{ color: theme.palette.text.primary }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Box mt="20px">
                <Typography variant="h6"  gutterBottom>
                  Application
                </Typography>
                <Button variant='outlined' disabled sx={{mr:1}}>Android</Button>
                <Button variant='outlined' disabled>IOS</Button>
              </Box>
            </Box>
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
              component={RouterLink}
              to="/terms"
              color="inherit"
              underline="hover"
              variant='body2'
              mx="10px"
            >
              Terms
            </Link>
            <Link
              component={RouterLink}
              to="/privacy"
              color="inherit"
              underline="hover"
              variant='body2'
              mx="10px"
            >
              Privacy
            </Link>
            <Link
              component={RouterLink}
              to="/feedback"
              color="inherit"
              underline="hover"
              variant='body2'
              mx="10px"
            >
              Feedback
            </Link>
          </Grid>
        </Grid>
        
    </Box>
  );
}
