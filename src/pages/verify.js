import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import VerificationForm from "../components/VerificationForm/";
import { getCurrentUserNotes } from "../gql/query";
import Note from "../components/Note";

const Verification = () => {
    useEffect(() => {
        // update the document title
        document.title = "Verification | BVote";
    });

    
    return (
       <React.Fragment>
        <p  style={{textAlign:"center"}}> Write your pseudonym et click on the verification button to verify your vote </p>
        <VerificationForm/>
        </React.Fragment>
        
    );
    

};


export default Verification;