import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MainMenu from './accountmenu/mainmenu';
import Sidebar from './sidebar';

import { useNavigate } from 'react-router-dom';



export default function Navbar({setThemes}){

    const navigate = useNavigate();

    return(
      <>

        <AppBar position="static">
          <Toolbar> 

            <Sidebar setThemes={setThemes}/>
            <Typography
            variant="h6" 
            component="div"
            onClick={() => {navigate("/")}}
            sx={{ ml:'auto', mr:'auto', display:'flex', fontWeight:900, fontSize:'1.8rem' ,cursor:"pointer"}}
            >
              indoom
            </Typography>
            <MainMenu/>
            
          </Toolbar>
        </AppBar>

      </>
    );
}