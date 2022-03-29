import React from 'react';
import {Anchor, Row, Col, Pagination, Table} from 'antd';
import './catalog.css'
import vector from './catalog-img/Vector.svg'
import {itemsCatalog} from "./items-catalog";
import Footer from "../footer";

const {Link} = Anchor;

{
    itemsCatalog.map((obj) => <li key={obj.id}>{obj.name}</li>)
}

const Navigation = () => {
    return (
        <Anchor className="navigation">
            <Link href='#banner' title='Home'/>
            <img src={vector} alt=""/>
            <Link href="#catalog" title='Каталог'/>
        </Anchor>
    )
}

const Items = () => {
    return (
        <>
            <Row gutter={[16, 16]} id="catalog">
                {
                    itemsCatalog.map((data) => {
                        return (
                            <Col className="gutter-row" span={6}>
                                <div className="block">
                                    <div className="block__img">
                                        <img src={data.image.itemCap} width={236} height={173} alt=""/>
                                    </div>
                                    <div className="block__title">
                                        <div className="title__des">
                                            <h3 className="title__name"> {data.name} </h3>
                                            <p>{data.series}</p>
                                        </div>
                                        <h3 className="price">{data.price}</h3>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    );
};

const Catalog = () => {
    return (
        <>
            <div className="container">
                <Navigation/>
            </div>
            <div className="main-catalog">
                <div className="container">
                    <div className="banner-catalog" id="banner">
                        <h1>НОВАЯ СЕРИЯ <br/> McLAREN</h1>
                    </div>
                    <div className="items">
                        <Items/>
                    </div>
                    {/*Исправить пагинацию */}
                    <Pagination defaultCurrent={16} total={50} className="pagination"/>
                    <Footer/>
                </div>
            </div>
        </>

    );
};

export default Catalog;

