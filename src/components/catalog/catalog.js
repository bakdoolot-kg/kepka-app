import React, {useEffect, useState} from 'react';
import {Anchor, Row, Col,} from 'antd';
import {Typography, Stack, Breadcrumbs, TableContainer, Table, IconButton} from "@mui/material";
import './catalog.css'
import vector from './catalog-img/Vector.svg'
import {itemsCatalog} from "./items-catalog";
import PaginationComponent from "../pagination";

const {Link} = Anchor;

{
  itemsCatalog.map((obj) => <li key={obj.id}>{obj.name}</li>)
}


const Navigation = () => {
  {/*<Anchor className="navigation">
    <Link href='#banner' title='Home'/>
    <img src={vector} alt=""/>
    <Link href="#catalog" title='Каталог'/>
  </Anchor>*/}
  return (
    <Anchor className="navigation">
      <Link href='#banner' title='Home'/>
      <img src={vector} alt=""/>
      <Link href="#catalog" title='Каталог'/>
    </Anchor>
  )
}

const Items = ({caps}) => {
  return (
    <>
      <Row gutter={[16, 16]} id="catalog">
        {
          caps.map((data, idx) => {
            return (
              <Col className="gutter-row" span={6} key={data + idx}>
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
  const [caps, setCaps] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [capsPerPage] = useState(16)

  // Когда будет готов get/post запросы нужно переделать useEffect
  useEffect(() => {
    const getCaps = () => {
      setLoading(true)
      setCaps(itemsCatalog)
      setLoading(false)
    }
    getCaps()
  })

  const lastCapIndex = currentPage * capsPerPage
  const firstCapIndex = lastCapIndex - capsPerPage
  const currentCaps = caps.slice(firstCapIndex, lastCapIndex)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
            <Items caps={currentCaps}/>
          </div>
          {/*Исправить пагинацию */}
          {/* <Pagination defaultCurrent={16} total={50} className="pagination"/> */}
            <PaginationComponent
              capsPerPage={capsPerPage}
              totalCaps={caps.length}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
            />
        </div>
      </div>
    </>
  );
};

export default Catalog;