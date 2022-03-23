import React from "react";
import "./product-details.css";
import kepka1 from "./images/12731509_59FIFTY_5950LIFEQTSP21003HOUROCOTC_HOUROC_OTC_3QR 1.svg";
import kepka2 from "./images/12731506_59FIFTY_5950LIFEQTSP21003LOSLAKOTC_LOSLAK_OTC_3QR 1.svg";
import kepka3 from "./images/12731514_59FIFTY_5950LIFEQTSP21003CHIWHIOTC_CHIWHI_OTC_3QR 1.svg";

function ProductDetails() {
  return (
    <div>
      <div className="all_product_details">
        <div className="product-details">
          <div className="img">
            <img src={kepka1} />
          </div>
          <div className="details">
            <p className="date">2021</p>
            <p className="new__era">New Era</p>
            <p className="title">Houston Rockets</p>
            <p className="money">2399c</p>
          </div>
        </div>
        <div className="product-details">
          <div className="img">
            <img src={kepka3} />
          </div>
          <div className="details">
            <p className="date">2021</p>
            <p className="new__era">New Era</p>
            <p className="title">Chicago WhiteSox</p>
            <p className="money">2399c</p>
          </div>
        </div>
        <div className="product-details">
          <div className="img">
            <img src={kepka2} />
          </div>
          <div className="details">
            <p className="date">2021</p>
            <p className="new__era">New Era</p>
            <p className="title">LA Lakers</p>
            <p className="money">2399c</p>
          </div>
        </div>
      </div>
      <div className="top__select">
        <h1>Top Select</h1>
      </div>
    </div>
  );
}

export default ProductDetails;
