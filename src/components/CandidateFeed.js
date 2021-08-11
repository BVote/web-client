import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Note from "./Note";

const CandidateWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-bottom: 2em;
    border-bottom: 1px solid #f5f4f0;
`;

const CandidateFeed = ({ candidates }) => {

    return (

        <p>
            Candidate says hello world
        </p>
        // <div>
        //     {
        //         candidates.map(
        //             candidate => (                                                        
        //                 <CandidateWrapper key={candidate.id}>
        //                     <Candidate candidate={candidate}/>
        //                     <Link to={`candidate/${candidate.id}`}> Permalink </Link>
        //                 </CandidateWrapper>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        //             )
        //         )
        //     }
        // </div>
    );
};

export default CandidateFeed;