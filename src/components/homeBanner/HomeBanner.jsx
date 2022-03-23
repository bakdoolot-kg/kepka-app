import React from 'react'
import './home-banner.scss'

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__inner">
        <h1 className="home-banner__title">New era</h1>
        <p className="home-banner__subtitle">
          Новая коллекция 2021 уже доступны на заказ
          яркие цвета, винтажный принт 70х, тематические
          группы и отличное качество
        </p>
        <button className="home-banner__btn btn">Открыть каталог</button>
      </div>
    </div>
  );
}

export default HomeBanner;
