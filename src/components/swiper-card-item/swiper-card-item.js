import React from 'react';
import './swiper-card-item.css'

const SwiperCardItem = () => {
   return (
      <div className='swiper-card'>
         <img className='card-img' src="https://via.placeholder.com/218x144" alt=""/>

         <div className="card-body">
            <div className='kepka-brand'>Adidas</div>
            <div className='kepka-model'>San Francisco Baseball</div>
            <div className="kepka-price">3800c</div>
         </div>
      </div>

   );
};

export default SwiperCardItem;