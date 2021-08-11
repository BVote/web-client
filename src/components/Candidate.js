import React from "react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import NoteUser from "../components/NoteUser";
import { getCitizenLoggingState } from "../gql/query";

import Button from "../components/Button";

const StyledCandidate = styled.article`
    max-width: 400px;
    margin: 0 auto;
    border-bottom: 1px solid #f5f4f0;

`;

const CandidateMedia = styled.div`
    display: flex;
    align-items: flex-start;
`;


const CandidateMediaFlipped = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
`;

const CandidateDescription = styled.div`
    flex: 1;
    padding: 10px;
`;


const CandidateImage = styled.div`
    flex: 1;
`;


const Candidate = (props) => {

    return (

        <React.Fragment >
            
                <StyledCandidate>
                <fieldset > 
                <legend> <h3>FCBE</h3></legend>
                         <CandidateMedia> 
                            {/* first citizen as candidate */}
                            <CandidateImage>
                                 <figure>
                                <img src="https://picsum.photos/100/100" height="100px" width="100px" border="px" alt="image" /> 
                                <figcaption text-align="center">President</figcaption>
                                </figure>
                            </CandidateImage>
                            <CandidateDescription>
                                Le temps passe, les projets s'écroulent, tu recherches toujours le grand amour,  
                             </CandidateDescription>
                        </CandidateMedia>


                        <CandidateMediaFlipped> 
                            {/* first citizen as candidate */}
                            <CandidateImage>
                                <figure>
                                <img src="https://picsum.photos/100/100" height="100px" width="100px" border="px" alt="image" /> 
                                <figcaption text-align="center">Caption</figcaption>
                                </figure>
                            </CandidateImage>
                            <CandidateDescription>
                                Le temps passe, les projets s'écroulent, tu recherches toujours le grand amour,  
                             </CandidateDescription>
                        </CandidateMediaFlipped>
                        <Button type="submit" style={{padding: "10px"}}>Choose</Button>                        
                        </fieldset>
                </StyledCandidate>
                

        </React.Fragment >
  
    );
};

export default Candidate;


// const figOption1 = {
//     float: "left",
//     width: "30%",
//     textAlign: "center",
//     fontStyle: "italic",
//     fontSize: "smaller",
//     textIndent: 0,
//     border: "thin #0077cc solid",
//     margin: "0.5em",
//     padding: "0.5em"
// }

// const figOption2 = {
//     float: "right",
//     width: "30%",
//     textAlign: "center",
//     fontStyle: "italic",
//     fontSize: "smaller",
//     textIndent: 0,
//     border: "thin #0077cc solid",
//     margin: "0.5em",
//     padding: "0.5em"
// }