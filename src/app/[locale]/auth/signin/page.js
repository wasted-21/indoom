import { Box } from "@mui/material";
import Formsignin from "./formsignin";



export default function signin(){
    return(
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Formsignin/>
        </Box>
    );
}