"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

export default function Swipper() {
  return (
    <Box sx={{width:'100%', height:{xs:'20rem', sm:'30rem',md:'45rem'},}}>
      <Swiper 
        style={{width:'100%', height:'100%'}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <Box
              component="img"
              src="/image/pages/home/garage.webp"
              sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
              }}
              alt="About us image"
            />
        </SwiperSlide>
        <SwiperSlide>
          <Box
              component="img"
              src="/image/pages/home/workshop.webp"
              sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
              }}
              alt="About us image"
            />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/image/pages/home/dealer.webp"
            sx={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
            }}
            alt="About us image"
          />        
        </SwiperSlide>
        <SwiperSlide>
          <Box
              component="img"
              src="/image/pages/home/event.webp"
              sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
              }}
              alt="About us image"
            />         
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
