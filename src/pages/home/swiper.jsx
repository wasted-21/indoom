
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

const swiperslide = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};


export default function Swipper() {
  return (
    <Box sx={{height:{xs:'15rem', sm:'20rem', md:'30rem',}, width:"100%", my:5,}}>
      <Swiper
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
        }}
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={swiperslide}>
          <Box
            component="img"
            src="assets/image/pages/home/swiper1.webp"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            alt="Error Page"
          />
        </SwiperSlide>
        <SwiperSlide style={swiperslide}>
          <Box
            component="img"
            src="assets/image/pages/home/swiper2.webp"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            alt="Error Page"
          />
        </SwiperSlide>
        <SwiperSlide style={swiperslide}>
          <Box
            component="img"
            src="assets/image/pages/home/swiper3.webp"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            alt="Error Page"
          />
        </SwiperSlide>
        <SwiperSlide style={swiperslide}>
          <Box
            component="img"
            src="assets/image/pages/home/swiper4.webp"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            alt="Error Page"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
