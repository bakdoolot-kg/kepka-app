import {NavLink, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deletCurrentCap, setCurrentCap} from "../../redux/reducers/caps/reducer";
import {Col, Row} from "antd";
import React, {useEffect} from "react";
import CapBuy from "../cap-buy";

export const Items = ({data}) => {
  let location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const cap = useSelector(state => state.caps.currentCap)

  const handleClick = () => {
    dispatch(setCurrentCap(data))
    history.push(`${location.pathname}cap-details/${data.id}`)
  }

  return (
    <Col className="gutter-row" span={6}>
      <div className="block" onClick={handleClick}>
        <div className="block__img">
          <img src={data.capsimage[0].image} width={236} height={173} alt=""/>
        </div>
        <div className="block__title">
          <div className="title__des">
            <h3 className="title__name"> {data.brand} </h3>
            <p>{data.name}</p>
          </div>
          <a className="price">{data.price}</a>
        </div>
      </div>
    </Col>
  )
};

