import React, {useEffect, useState} from "react";
import './catalog-item-details.css'
import {productSizes, imgUrls} from "./cap-details-items";
import TopSellers from "../top-sellers";
import {NavLink} from "react-router-dom";

const changeID = (id) => {
        let BigImg = document.querySelector('.big-img img')
        BigImg.src = imgUrls[id].url
    }

    const elements = imgUrls.map((item) => {
        return (
            <div key={item.id} id={item.id} className="small-img">
                <img src={item.url} onClick={() => changeID(item.id)} alt="small"/>
            </div>
        );
    });



    const CapDetails = () => {
        const [counter, setCounter] = useState(1)
        const [price, setPrice]= useState(3200)
        const [size, setSize] = useState(0)
        const [active, setActive]= useState('unable')
        const onIncrease = () => {
            setCounter(counter+1)
            setPrice(price+price/counter)
        };
        const onDecrease = () => {
            if (counter>1){
                setCounter(counter-1)
                setPrice(price-price/counter)
            }
        };
        const onSetSize =(item)=>{
            setSize(item)
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
        useEffect(()=>{
            console.log(size)
        }, [size])
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
                            <img src={imgUrls[0].url} alt="display"/>
                        </div>
                        <div className="images">
                            {elements}
                        </div>
                    </div>
                    <div className="right">
                        <div className='top-info'>
                            <div className="pname">
                                <span id='boldPname'>New era</span><br/> black snapback 59 fifty
                            </div>
                            <div className='size-count-change'>
                                <div className="size">
                                    {sizeOfProduct()}
                                </div>
                                <div className="quantity">
                                    <div className="number">
                                        <button className="number-minus" type="button" onClick={onDecrease}>-</button>
                                        <input type="number" min='0' value={counter} readOnly/>
                                        <button className="number-plus" type="button" onClick={onIncrease}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buy-info">
                            <div className="price">{price}сом</div>
                            <div className='btn-box'>
                                <button className='buy'>Добавить в корзину</button>
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

export default CapDetails