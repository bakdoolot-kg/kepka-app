import React from "react";
import "./numbers.css";

const Numbers = () => {
  return (
    <div className="numbers">
      <div className="main-title">
        <h1>CUSTOM CUPS в цифрах</h1>
        <div className="texts">
          <div className="second_title">
            <p className="number">12000</p>
            <p className="text">проданных кепок</p>
          </div>
          <div className="third_title">
            <p className="number_2">9</p>
            <p className="text_2">лет на рынке</p>
          </div>
          <div className="fourth_title">
            <p className="number_3">8500</p>
            <p className="text_3">довольных клиентов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;