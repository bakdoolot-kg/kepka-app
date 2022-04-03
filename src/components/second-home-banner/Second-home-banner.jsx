import React from 'react';
import './second-home-banner.css'
import kepka from '../../assets/images/newera-2.svg'

const SecondHomeBanner = () => {
    return (
        <div>
            <div className="circle"></div>
            <div className='free'>
                <div className="yellow-square">
                    <div className="supr-collab-btn-text">
                        <h1 className="supremenewera">
                            SUPREME & NEW ERA
                        </h1>
                        <div className="collabaration">
                            collabaration
                        </div>
                        <div>
                            <button className="open-catalog" onClick='window.location.href="/catalog/"'><div className="open-catalog-text">Открыть каталог</div></button>
                        </div>
                    </div>
                    <div>
                        <img className="kepka-banner" src={kepka} alt="kepki-png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondHomeBanner;
