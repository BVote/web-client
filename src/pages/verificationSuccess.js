import React from "react";
import { prototype } from "react-markdown";

import { Link, withRouter } from "react-router-dom";

import Button from "../components/Button";
import LightBorderedButton from "../components/LightBorderedButton";

// TODO: Make this method more dynamic
String.prototype.troncateEmailStringUsingAsterisks = (idx=2) => {
    try {
        return this.substr(0, idx) + "***" + this.substr(index + "***".length);
    } catch (error)  {
        return   "***" + this.substr("***".length);
    }
}


const IdentificationSuccess = (props) => {

    // TODO: Use desctruturing syntax for this declarations
    const firstname  = props.location.state.citizen.firstnames[0];
    const lastname  = props.location.state.citizen.lastnames[0];
    const email  = props.location.state.citizen.emails[0];
    const photo  = props.location.state.citizen.photos[0];    
    
    console.log("==================", props.location.state.citizen);
    // console.table(firstname);
    // console.table(email);
    
    return (
        <React.Fragment>
            <div style={{position: "relative"}}>

                Hello <b>{firstname} {lastname}</b>, you have been well identified <br/><br/>
                Check you mail  <b>{email.substr(0,1) + "***" + email.substring(email.indexOf("@"))}</b> to authenticate by clicking on the provided link. <br/><br/><br/><br/>

                
                <LightBorderedButton>Go For Voting</LightBorderedButton>  
                        
            </div>

        </React.Fragment>
    ) ;
};

export default IdentificationSuccess;

// https://www.amazon.com/Modern-Drummer-Presents-Stick-Technique/dp/1458418200/ref=as_li_ss_il?ie=UTF8&qid=1542026910&sr=8-1&keywords=1458418200&tag=ezd01-20&linkId=38c5568e2e4b064fe2af4182bc6ca453&geniuslink=true