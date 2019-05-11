import React from "react";
import "./ClientHeader.css"

function ClientInfo(props) {
    return (
        
        <div className="cardBody container card clientHeaderCard">
        <div className = "cardBodyColor">
            <h1 className="text">{props.firstname} {props.lastname}</h1>
            <div className="textInfo">
                <h3 className="textInfo">{props.phonenumber}</h3>
                <h3 className="textInfo">Address:</h3>
                <h3 className="textInfo"> 000 Sticky Lane</h3>
                <h3 className="textInfo"> Aspen, CO</h3>
            </div>
            </div>
        </div>
    );
}

export default ClientInfo;
