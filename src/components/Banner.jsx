import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Banner() {
    let option = {
        pagination:{
            dynamicBullets:true
        },
        Autoplay:[Infinity],
        modules:[Pagination],
        className:"mySwiper"
    }
  return (
    <>
      <Swiper {...option}>
        <SwiperSlide>
          <img src="./assets/s_0.webp" style={{height:600, width:"100%"}} alt="no image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/s_1.webp" style={{height:600, width:"100%"}} alt="no image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/s_2.webp" style={{height:600, width:"100%"}} alt="no image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/s_3.webp" style={{height:600, width:"100%"}} alt="no image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/s_4.webp" style={{height:600, width:"100%"}} alt="no image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/s_5.webp" style={{height:600, width:"100%"}} alt="no image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
