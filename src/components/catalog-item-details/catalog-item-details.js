import React, {useState} from 'react';
import '../cap-details/catalog-item-details.css';


const imgUrls = [
    {
      id: 0,
      url: "https://s3-alpha-sig.figma.com/img/98b9/46fe/7508d3a5792bde9d6a8c95b4781d83e7?Expires=1648425600&Signature=I59ddVd77mgAXroe7StrKvvtGnzYWUT9acJGrL~kRqEG0kHs1ZkHJ~~hJulysbwmRe~WyStlqZfyH6JXXn0j0f63BBeMW9lqFTiYNJeNejt2SGpm11ZNAo-JPD1xUlxHQAAwcU-NjPSgX124CUQRCm5yrG0g5w-ZdfQhB-P1zUqZMI9xrNUSu1GEYV3C-Iu1wMYQdVQ1uAQ1jcrBCZs0PKqfgWeU1r8ubkB~0N-JYWk1g6mDw4aBnOGINxBOXYvzk4bzDtk-p9p98jfLzL4jnRKof2LhQ5MxwQyWS4R0ETs5lnI~tfX1-54tPn0gZOdWLdGpix122~H4JMuO0b65kA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 1,
      url:"https://s3-alpha-sig.figma.com/img/860c/5fe5/47ef6f226d538ea8ad92a0e03a413f3c?Expires=1648425600&Signature=ZEqtAGA-add9kRTiiYIsfhV5cmmPHXam4qdrfP5WjvTC3U9Pz6AmmoOf5bzQlOVE7jnQvvZ2Am1Z9~2cGr~a7tVE4rUSRH68b6Z8saIcE7tRaW38K8wWLp6W1MCbdJJl7uNwlosu3ilNh~PcnfWTNQHAC7W33xd6E~azgiyhSva29kU9Mp1lcjW8e9aiRlukIiN22rYimgOYfhlse82gOq6mjB2wUAKs-a1nMjhIybgQaG5edvmt8ap8zbrYBdtCnROWeSe1SEuKrpzW9UBPeqKZtu9EFA3iwwuidIEZeDbwtf-VDIeQ9o91lEarmA~ryNTWCfjsVKeOzK8hC3WVgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 2,
      url: "https://s3-alpha-sig.figma.com/img/82c5/b6bf/da35de74d489fa8d71067d98754bf673?Expires=1648425600&Signature=OcV~ZR09mE~G39R~32-B8~Qc5Jx088l4EGBlNKCDpl-52p3m7yab9hk7fr~FG2fUwNt0yy93zRJXHm0tfhrY6GrFMC9nNh7n0nxFMAFAxyZCPklCSCMAsVGoAniZIe91WmcNlmy4mbKZNbcpg9PRl9rhLIxWKBcqxUJfi~9VyTYTRo41nMihTXcuNDGFoNzsdZ4atRc51yvAoXpH2qXHMyqSrtWBVidpQcK~twGpJOU7I5TjWWUcCbEEAvjamtNUnkjCJy5TITxg4B2lSVQZrzYn9EVANk1cClIcUG0hxqHc-6ZsIb4Av7Xn4btNgbQ~4ZeG9n-MeK9bRqKhb0kCww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 3,
      url: "https://s3-alpha-sig.figma.com/img/c487/7990/3b71f5c711208b48468c8010c34306a5?Expires=1648425600&Signature=NmoA9d9kKOZ4N5P42GYxOaAh3f2iYH43LxH5qaRamzLL23MY6DXzYCf8gbfX~hSdhPo8OQVfLMLBFnQWYiX0MtaSOUK7phRysa1FONZMfdY6tU9v5I-CskC~ZGKnWlnqtMG5WdLhy9W-sF3uOyrKwQ0nTrZnUazAHFejo4bFAu90xwVfQOIo2u~zQMWQCQWc1uRhOn~GMJkIDE~8n8hm1MTlZr5lR4JhM~SjCCHzJOJALceYND7yaxi0G1ZnN9NG07b8q2p~mTrCTOkOESsLLwgyBDiF6daLE7p1JcpDOcG4D-Ifhd9K6J~ApzilvAwekbp2PrtONjGBxOtOR2Pamg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
]

const productSizes = [
  {
    id: 0,
    size: "S",
  },
  {
    id: 1,
    size: "M",
  },
  {
    id: 2,
    size: "L",
  },
  {
    id: 3,
    size: "XL",   
  },
]

const changeID = (id) => {
  let BigImg = document.querySelector('.big-img img')
  BigImg.src = imgUrls[id].url
  //let smallImg = document.querySelector(`.big-img #${id}`);
}

const elements = imgUrls.map((item) => {
  return (
    <div key={item.id} id={item.id} className="small-img">
      <img src={item.url} onClick={() => changeID(item.id)} alt="small"/>
    </div>
  );
});

const sizeOfProduct = productSizes.map((item) => {
  return (
    <div key={item.id} className="psize" >
      <p className='sizeText'>{item.size}</p>
    </div>
  );
});

const itemDetails = () => {
  const [counter, setCounter] = useState(1)
  const onInrease = () => {
    setCounter(counter + 1)
  };
  const onDecrease = () => {
      setCounter(counter - 1)
  };
  return (
    <div className="catalog-page">
      <div className="item-details">
       <div className="left">
          <div className="url">Home {'>'} Каталог {'>'} <label className='urlCurr'>Детали продукта</label> </div>
          <div className="big-img">
              <img src={imgUrls[0].url} alt="display"/>
          </div>
            <div className="images">
              {elements}
            </div>
       </div>
       <div className="right">
          <div className="pname"><span id='boldPname'>New era</span><br/> black snapback 59 fifty</div>
          
          <div className="size">
            <p>Size :</p>
            {sizeOfProduct}
          </div>
          <div className="quantity">
            <p>Quantity :</p>
            <div class="number">
              <button class="number-minus" type="button"  onClick={onDecrease}>-</button>
              <input type="number" min={0} value={counter} readonly />
              <button class="number-plus" type="button" onClick={onInrease}>+</button>
            </div>
          </div>
          <div className="price">3200сом</div>
          <div className='btn-box'>
            <button className='buy'>Добавить в корзину</button>
          </div>
       </div>
      </div>
    </div>
  );
}

export default itemDetails;


/*import React from "react";

const itemDetails = () => {
    return (
      <div className="item-details">
        <div className="left">
            <div className="big-img">
                <img src=""/>
                <h1></h1>
            </div>
        </div>
      </div>
    );
  }
  
  export default itemDetails;*/