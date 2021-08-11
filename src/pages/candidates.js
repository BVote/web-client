import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import styled from "styled-components";

// import CandidateFeed from "../components/CandidateFeed/";

import Candidate from "../components/Candidate";
import { getCandidates, getLoremIpsum } from "../gql/query";
 
const WrapCandidate = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const Candidates = (props) => {
    useEffect(() => {
        // update the document title
        document.title = "Candidates | BVote";
    });


    const { loading, error, data } = useQuery(getLoremIpsum);

    if(loading) {
        return <p>Loading...</p>;
    }

    if(error) {
        console.log(error);
        return <p>Error-Use Query</p>;
    }
    
    console.log(date);

    return (
        <React.Fragment>
            <h2>Choose your favorite candidate now</h2>
            <WrapCandidate> 
                <Candidate />
                <Candidate />
            </WrapCandidate>
            <WrapCandidate> 
                <Candidate />
                <Candidate />
            </WrapCandidate>
            
        </React.Fragment>
        
    );

};


export default Candidates;