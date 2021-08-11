import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

// import CandidateFeed from "../components/CandidateFeed/";

import Toto from "../components/Toto";
import { getCurrentUserNotes } from "../gql/query";
import Note from "../components/Note";

const WrapCandidate = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const Totos = () => {
    useEffect(() => {
        // update the document title
        document.title = "Totos | BVote";
    });

    return (
        <React.Fragment>
            <h2>Choose your favorite candidate now</h2>
            <WrapCandidate>
                <Toto />
                <Toto />
                {/* <Toto />
                <Toto />   */}
            </WrapCandidate>
        </React.Fragment>
    );

};


export default Totos;