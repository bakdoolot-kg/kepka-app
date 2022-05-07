import React, {useState} from "react";
import CapBuy from "../cap-buy";

const CapDetail = ({productSizes, onDecrease, onIncrease, counter, price}) => {

  const [size, setSize] = useState(0)
  const [active, setActive]= useState('unable')

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

  return (
    <>
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
    </>
  )
}

export default CapDetail