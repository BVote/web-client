import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
// import ReactMarkdown from "react-markdown";
import { Link, withRouter } from "react-router-dom";

// animations
import Typewriter from 'typewriter-effect';
import Timer from "react-compound-timer";
import ReactWaterMark from 'react-watermark-component';

import Button from "../components/Button";
import LightBorderedButton from "../components/LightBorderedButton";
import NoteFeed from "../components/NoteFeed";
import { getNotes } from "../gql/query";



const reactWaterMarkOptions = {
    chunkWidth: 300,
    chunkHeight: 60,
    textAlign: 'left',
    textBaseline: 'bottom',
    globalAlpha: 0.17,
    font: '20px Microsoft Yahei',
    rotateAngle: -0.26,
    fillStyle: '#666'
  };
 
const text = "Welcome to BVote 🗳";


const Home = () => {
    useEffect(() => {
        // update the document title
        document.title = "Home | BVote";
    });

    return (
        <ReactWaterMark
            waterMarkText={text}
            openSecurityDefense
            // securityAlarm={beginAlarm}
            options={reactWaterMarkOptions}
        >

            <div style={{position: "relative", maxWidth: "1400px"}}>
                <h3>
                    <div style={{fontWeight:"800", fontSize:"50px"}}>
                        <p style={{fontSize: "30px"}}>
                        You are welcome to <span style={{color:"#0077cc"}}> BVote 🗳</span>,</p>
                        <br/>  
                        <Typewriter
                            options={{
                                strings: ["The confident voting plateform.", "The better voter experience creator.", "The real guarantor of integrity.", "Every vote is highly important."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <br/><br/> 
                        <Timer formatValue={value => `${value < 10 ? `0${value}` : value}`} >
                            Election ends in {" "} <u style={{color:"#0077cc"}}> 
                            {/* <Timer.Days />: */}
                            <Timer.Hours />:
                            <Timer.Minutes />:
                            <Timer.Seconds />s
                            {/* <Timer.Milliseconds />  */}</u>  <br/>
                        </Timer>
                    </div>
    
                </h3>  
                <Link to="/identify"> 
                    <LightBorderedButton title="Identify Authenticate and Vote" style={{padding: "20px", position: "absolute", bottom: "-200px", right: "100px"}} >
                    <b>Start  Now</b>
                    </LightBorderedButton> 
                </Link>          
                
            </div>

            </ReactWaterMark>
        

    ) ;
};

export default Home;