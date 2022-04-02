import React, {useEffect, useState} from "react";
import './catalog-item-details.css'
import {productSizes, imgUrls} from "./cap-details-items";

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

        const sizeOfProduct = productSizes.map((item, name) => {
            return (
                <input key={item.id} className={active==='active' ? "active" : active!=='active' ? 'psize' : 'psize'} type={"button"} onClick={()=>{
                    onSetSize(item.size)
                    onActive('active')
                }} value={item.size}/>
            );
        });

        return (
            <div className="cap-info">
                <div className="item-details">
                    <div className="left">
                        <div className="url"><span>Home</span> {'>'} <span> Каталог</span>  {'>'} <label className='urlCurr'>Детали продукта</label>
                        </div>
                        <div className="big-img">
                            <img src={imgUrls[0].url} alt="display"/>
                        </div>
                        <div className="images">
                            {elements}
                        </div>
                    </div>
                    <div className="right">
                        <div className="pname"><span id='boldPname'>New era</span><br/> black snapback 59 fifty</div>
                        <div className='size-count-change'>
                            <div className="size">
                                {sizeOfProduct}
                            </div>
                            <div className="quantity">
                                <div className="number">
                                    <button className="number-minus" type="button" onClick={onDecrease}>-</button>
                                    <input type="number" min='0' value={counter} readOnly/>
                                    <button className="number-plus" type="button" onClick={onIncrease}>+</button>
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
            </div>
        );
    }

export default CapDetails