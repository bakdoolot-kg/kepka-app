import React from 'react';
import SwiperForCards from "../swiper-for-cards";
import './top-sellers.css'

const TopSellers = () => {
   return (
      <div className='top-sellers'>
         <div className="container">
            <div className="title">top sellers <span className='dot'>■	</span></div>
            <SwiperForCards/>
         </div>
      </div>
   );
};

export default TopSellers;