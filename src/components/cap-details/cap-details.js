import React, {useContext, useEffect, useState} from "react";
import './catalog-item-details.css'
import {productSizes, imgUrls} from "./cap-details-items";
import TopSellers from "../top-sellers";
import {NavLink} from "react-router-dom";
import {CapContext} from "../caps-context";
import {connect} from "react-redux";

const CapDetails = ({selectedItemId, }) => {
        const [data, setData] = useState({

        })

        const caps= useContext(CapContext.Consumer)

        useEffect(() => {
            caps.getCap(selectedItemId).then(data=>{
                setData({...data})
            }).catch(error=>{
                setData({...data})
            })
        }, [selectedItemId])

        const changeID = (id) => {
            let BigImg = document.querySelector('.big-img img')
            BigImg.src = data.image
        }

        const elements = imgUrls.map((item) => {
            return (
                <div key={item.id} id={item.id} className="small-img">
                    <img src={data.image} onClick={() => changeID(item.id)} alt="small"/>
                </div>
            );
        });
        const [active, setActive]= useState('unable')
        const [cart, setCart]=useState({
            brand: data.brand,
            name: data.name,
            image: data.image,
            cost: 0,
            size: 0,
            count: 1
        })

         useEffect(()=>{
            setCart({...cart, cost: data.price, image: data.image, brand: data.brand, name:data.name})
        }, [data])

        const onIncrease = () => {
            setCart({...cart, cost: cart.cost+cart.cost/cart.count, count: cart.count+1})
        };

        const onDecrease = () => {
            if (cart.count>1){
                setCart({...cart, cost: cart.cost-cart.cost/cart.count, count: cart.count-1})
            }
        };
        const onSetSize =(item)=>{
            setCart({...cart, size: item})
            }
        const onActive =(name)=>{
            setActive(name)

            if(active==='active'){
                setActive('psize')
            }
        }

        const sizeOfProduct =() => {
            return (
                <div>
                    <input key={productSizes[0].id} className={active==='S' ? "active" : active!=='active' ? 'psize' : 'psize'} type={"button"} onClick={()=>{onSetSize(productSizes[0].size); onActive('S')}} value={productSizes[0].size}/>
                    <input key={productSizes[1].id} className={active==='M' ? "active" : active!=='active' ? 'psize' : 'psize'} type={"button"} onClick={()=>{onSetSize(productSizes[1].size); onActive('M')}} value={productSizes[1].size}/>
                    <input key={productSizes[2].id} className={active==='L' ? "active" : active!=='active' ? 'psize' : 'psize'} type={"button"} onClick={()=>{onSetSize(productSizes[2].size); onActive('L')}} value={productSizes[2].size}/>
                    <input key={productSizes[3].id} className={active==='XL' ? "active" : active!=='active' ? 'psize' : 'psize'} type={"button"} onClick={()=>{onSetSize(productSizes[3].size); onActive('XL')}} value={productSizes[3].size}/>
                </div>
            );
        }


    return (
            <div className="cap-info">
                <div className="item-details">
                    <div className="left">
                        <div className="url">
                            <NavLink to='/'>
                                <span className='url-text'>Hoмe</span>
                            </NavLink>
                            {'>'}
                            <NavLink to='/catalog/'>
                            <span className='url-text'>Каталог</span>
                            </NavLink>
                            {'>'}
                            <span className='urlCurr'>Детали продукта</span>
                        </div>
                        <div className="big-img">
                            <img src={data.image} alt="display"/>
                        </div>
                        <div className="images">
                            {elements}
                        </div>
                    </div>
                    <div className="right">
                        <div className='top-info'>
                            <div className="pname">
                                <span id='boldPname'>{data.brand}</span><br/> {data.name}
                            </div>
                            <div className='size-count-change'>
                                <div className="size">
                                    {sizeOfProduct()}
                                </div>
                                <div className="quantity">
                                    <div className="number">
                                        <button className="number-minus" type="button" onClick={onDecrease}>-</button>
                                        <input type="number" min='0' value={cart.count} readOnly/>
                                        <button className="number-plus" type="button" onClick={onIncrease}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buy-info">
                            <div className="price">{cart.cost}сом</div>
                            <div className='btn-box'>
                                <button className='buy' onClick={()=>console.log(cart)}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <TopSellers/>
                </div>
                <div className='added-to-cart'>
                    <button className='buy'>Товар добавлен в корзину</button>
                </div>
            </div>
        );
    }

    const mapStateToProps =(state)=>{
        return state
    }

export default connect(mapStateToProps)(CapDetails)