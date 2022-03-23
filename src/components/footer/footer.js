import React from "react";
import "./footer.css";
import custom from "./images/custom.png";
import linkedin from "./images/Linkedin.png";
import facebook from "./images/Facebook.png";
import twitter from "./images/Twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_footer">
        <div className="main_title">
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
          <div className="line"></div>
          <div className="end__footer">
            <div className="custom">
              <img src={custom} with="53" height="53" />
              <span>
                <h5>Custom caps</h5>
                <p>Магазин кепок</p>
              </span>
            </div>
            <div className="copyright">
              <p>© Copyright 2019 - Lift Media</p>
            </div>
            <div className="links">
              <img src={linkedin} />
              <img src={facebook} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
