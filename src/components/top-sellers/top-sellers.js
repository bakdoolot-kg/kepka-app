import React from 'react';
import './top-sellers.css'
import SwiperForCards from "../swiper-for-cards";

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