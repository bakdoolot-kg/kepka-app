import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss';

// assets
import { logoKepka2, basketIcon } from '../../assets'

function Header() {
  const [active, setActive] = useState(false)

  const handleActive = (oldState) => {
    setActive(!oldState)
  }

  return (
    <div className="header">
      <div className="left-bar">
        <div className="left-bar__inner">
          <Link to='/'>
            <img className="logo-kepka" src={logoKepka2} alt='logo kepka' />
          </Link>
        </div>

        <ul className="center-bar">
          <li className="center-bar__item"><NavLink to="/catalog/">Каталог</NavLink></li>
          <li className="center-bar__item"><NavLink to="/brands/">Бренды</NavLink></li>
          <li className="center-bar__item"><NavLink to="/about-us/">О нас</NavLink></li>
        </ul>
      </div>

      <ul className="right-bar">
        <li className="searchWrapp"><input className="search" /></li>
        <li><Link to="/basket/"><img src={basketIcon} alt="basket icon" /></Link></li>
      </ul>
    </div >
  );
}

export default Header;
