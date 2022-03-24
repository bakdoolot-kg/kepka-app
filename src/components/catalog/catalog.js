import React from 'react';
import { Anchor } from 'antd';
import './catalog.css'
import vector from './catalog-img/Vector.svg'


const { Link } = Anchor

const Navigation = () => {
    return (
        <Anchor className="navigation">
            <Link href="" title='Home'/>
            <img src={vector} alt=""/>
            <Link href="" title='Каталог'/>
        </Anchor>
    )
}


const Banner = () => {
    return (
        <div className="banner-catalog">

        </div>
    )
}


const Catalog = () => {
    return (
        <div>
            <Navigation/>
            <Banner />
        </div>
    );
};

export default Catalog;