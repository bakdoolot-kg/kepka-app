import React from "react";
import "./product-details.css";

function ProductDetails() {
  return (
    <div>
      <h1>Top Select</h1>
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
    </div>
  );
}

export default ProductDetails;
