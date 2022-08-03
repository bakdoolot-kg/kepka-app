import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Scrollbar} from "swiper";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {arrow} from "../../assets";
import SwiperCardItem from "../swiper-card-item";
import './swiper-for-cards.css'


const SwiperForCards = () => {

   return (
      <>
      <div className="swiper-inner">
         <img src={arrow} className='arrow-left' alt="arrow-left"/>
         <Swiper
            modules={[Navigation, Scrollbar]}
            className='swiper'
            slidesPerView={3}
            breakpoints={{
               0: {
                  scrollbar:{
                     dragSize: 20
                  }
               },
               320: {
                  scrollbar: {
                     dragSize: 28
                  }
               }

            }}
            navigation={{
               prevEl: '.arrow-left',
               nextEl: '.arrow-right'
            }}
            scrollbar={{
               el: '.swiper-scrollbar',
               draggable: true,
               // dragSize:  28
            }}
            pagination={true}

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
         <div className="swiper-scrollbar"> </div>
      </>
   );
};

export default SwiperForCards;