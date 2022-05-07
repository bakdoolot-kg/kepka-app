import React from 'react'
import CapDetails from "../components/cap-details";
import Footer from "../components/footer";
import {withRouter} from 'react-router-dom'
import {useSelector} from "react-redux";

const CapDetailsPage= ({selectedItemId}) => {
    const cap = useSelector(state => state.caps.currentCap)

    return (
        <div className="brands-page">
            <CapDetails selectedItemId={selectedItemId} cap={cap} />
            <Footer/>
        </div>
    );
}

export default withRouter(CapDetailsPage);