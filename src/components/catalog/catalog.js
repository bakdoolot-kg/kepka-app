import React, {useContext, useEffect, useState} from 'react';
import {Anchor, Row, Col, Pagination, Table} from 'antd';
import './catalog.css'
import vector from './catalog-img/Vector.svg'
import Footer from "../footer";
import {Consumer} from "../caps-context";
const {Link} = Anchor;


const Navigation = () => {
    return (
        <Anchor className="navigation">
            <Link title='Home'/>
            <img src={vector} alt=""/>
            <Link href="#catalog" title='Каталог'/>
        </Anchor>
    )
}

const Items = () => {
    const [data, setData] = useState({
    })

    const caps = useContext(Consumer)

    const getCaps = () => {

        caps.getAllCaps().then(data=> {
            setData({...data})
        }).catch(error=>{
            setData({...data})
        })
    }
    useEffect(()=>{
        getCaps()
    }, [])
    const itemCatalog = data.results
    console.log(itemCatalog)
    return (
        <div>
            <Row gutter={[16, 16]} id="catalog">
                {
                    itemCatalog?.map((data) => {
                        return (
                            <Col className="gutter-row" span={6} key={data.id}>
                                <div className="block">
                                    <div className="block__img">
                                        <img src={data.capsimage[0].image} width={236} height={173} alt=""/>
                                    </div>
                                    <div className="block__title">
                                        <div className="title__des">
                                            <h3 className="title__name"> {data.name} </h3>
                                            <p>{data.brand}</p>
                                        </div>
                                        <a className="price">{data.price}</a>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
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

