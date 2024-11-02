import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AvatarMenu from './component/avatarmenu';
import Sidebar from './component/sidebar';
import Link from 'next/link';
import { Box } from '@mui/material';
import Themebtn from './component/themebtn';
import Searchbar from './component/searchbar';
import Langbtn from './component/langbtn';
import Searchbtn from './component/searchbtn';


export default function Header(){
  return(
    <AppBar position="fixed">
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Box sx={{display:'flex'}}>
            <Sidebar/>
            <Link href='/' style={{color:'#fff', margin:'0 20px'}}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight:'700', fontSize:'1.8rem'}}
            >
              indoom
            </Typography>
          </Link>
          </Box>
          <Box sx={{display:{xs:'none', md:'block'}}}>
            <Searchbar/>
          </Box>
          <Box sx={{display:'flex'}}>
            <Searchbtn/>
            <Langbtn/>
            <Themebtn/>
            <AvatarMenu/>
          </Box>
        </Toolbar>
    </AppBar>   
  );
}