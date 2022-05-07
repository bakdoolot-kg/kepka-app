import React, {lazy, useContext, useEffect, useState, Suspense} from 'react';
import {Anchor, Row, Col, Pagination} from 'antd';
import {Items} from "./items";
import './catalog.css'
import vector from './catalog-img/Vector.svg'
import Footer from "../footer";
import {CapContext} from "../caps-context";
import {NavLink, useHistory} from "react-router-dom";
import CapBuy from "../cap-buy";
import {setCurrentCap} from "../../redux/reducers/caps/reducer";
import {useDispatch, useSelector} from "react-redux";

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

const ItemsInCatalog = () => {
  const [data, setData] = useState([])
  const cap = useSelector(state => state.caps.currentCap)

  const caps = useContext(CapContext.Consumer)


  useEffect(() => {
    let componentMounted = true;

    if (componentMounted) {
      const getCaps = () => {

        caps.getAllCaps().then(data => {
          setData(data)
        }).catch(error => {
          console.error(error)
        })
      }

      getCaps()
    }

    return () => componentMounted = false
  }, [])

  const itemCatalog = data.results

  return (
    <div>
      <Row gutter={[16, 16]} id='catalog'>
        {
          itemCatalog?.map((data) => {
            return <Items data={data} key={data.id}/>
          })
        }
      </Row>
    </div>
  )
}

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
            <ItemsInCatalog/>
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

