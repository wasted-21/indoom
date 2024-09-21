// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Swipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <img src="./assets/image/cars/car_comparison.png" alt="" />
        </SwiperSlide>
   

        <SwiperSlide>

          <img src="./assets/image/cars/car_maintenance.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>

          <img src="./assets/image/cars/spare_parts_dealer.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slider</SwiperSlide>

      </Swiper>
    </>
  );
}
