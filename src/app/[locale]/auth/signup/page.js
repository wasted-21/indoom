import { Box, } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import SignupForm from "./fromsignup";

//MetaData for Register Page
export const metadata = {
  title: "indoom | signup",
  description: "Create account",
};

export default function Signup() {
  return (
    <Box sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignupForm/>
    </Box>
  );
}

