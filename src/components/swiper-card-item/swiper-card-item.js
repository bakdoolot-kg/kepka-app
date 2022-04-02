import React from 'react';
import './swiper-card-item.css'
import {NavLink} from "react-router-dom";

const SwiperCardItem = () => {
   return (
       <NavLink to='/catalog/'>
          <div className='swiper-card'>
             <img className='card-img' src="https://i.pinimg.com/originals/8b/b7/1b/8bb71b4cce5fa2cfee54a91e02bda02f.png" alt=""/>

             <div className="card-body">
                <div className='kepka-brand'>Adidas</div>
                <div className='kepka-model'>San Francisco Baseball</div>
                <div className="kepka-price">3800c</div>
             </div>
          </div>
       </NavLink>
   );
};

export default SwiperCardItem;