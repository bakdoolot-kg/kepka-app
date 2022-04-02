import React from "react";
import "./footer.css";
import custom from "./images/custom.png";
import linkedin from "./images/Linkedin.png";
import facebook from "./images/Facebook.png";
import twitter from "./images/Twitter.png";

const Footer = () => {
  return (
    <div className="footer">
        <div className="main_title">
          <div className="line"></div>
          <div className="end__footer">
            <div className="custom">
              <img src={custom} width="63" height="53" />
              <div className="cap__store">
                <p className="custom__caps">Custom caps</p>
                <p className="end__store">Магазин кепок</p>
              </div>
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
  );
};

export default Footer;
