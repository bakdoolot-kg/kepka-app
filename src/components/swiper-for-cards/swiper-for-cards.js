import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import {Navigation} from "swiper";
import 'swiper/css/navigation';
import {arrow} from "../../assets";
import SwiperCardItem from "../swiper-card-item";
import './swiper-for-cards.css'

const SwiperForCards = () => {
   return (
      <div className="swiper-inner">
         <img  src={arrow} className='arrow-left' alt="arrow-left"/>
         <Swiper
            modules={[Navigation]}
            className='swiper'
            slidesPerView={3}
            navigation={{
               prevEl: '.arrow-left',
               nextEl: '.arrow-right'
            }}
         >
            <SwiperSlide className='swiper-slide'>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
            <SwiperSlide>{SwiperCardItem}</SwiperSlide>
         </Swiper>
         <img src={arrow} className='arrow-right' alt="arrow-right"/>
      </div>
   );
};

export default SwiperForCards;