import { Box, Container } from "@mui/material";

export default function ErrorPage(){
    return(
        <Box sx={{mt:10}} >
            <Container>
                <Box
                    component="img"
                    src="assets/image/pages/errorpage.webp"
                    sx={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                    alt="Error Page"
                />
            </Container>
        </Box>
    ); 
}
