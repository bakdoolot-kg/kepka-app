import React from 'react'
import CapDetails from "../components/cap-details";
import Footer from "../components/footer";
import {withRouter} from 'react-router-dom'

const CapDetailsPage= ({selectedItemId}) => {

    return (
        <div className="brands-page">
            <CapDetails selectedItemId={selectedItemId}/>
            <Footer/>
        </div>
    );
}

export default withRouter(CapDetailsPage);