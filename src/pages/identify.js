import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation, useApolloClient, gql, useQuery, useLazyQuery } from "@apollo/client";
import ReactWaterMark from 'react-watermark-component';

import Button from "../components/Button";
import IdentificationForm from "../components/IndentificationForm";

import { getCitizenIdentity, getHello } from "../gql/query";
 

const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
`;

const Form = styled.form`
    label, input {
        display: block;
        line-height: 2em;
    }

    input {
        width: 100%;
        margin-bottom: 1em;
    }
`;

const reactWaterMarkOptions = {
    chunkWidth: 300,
    chunkHeight: 60,
    textAlign: 'left',
    textBaseline: 'bottom',
    globalAlpha: 0.15,
    font: '20px Microsoft Yahei',
    rotateAngle: -0.26,
    fillStyle: '#666'
  };

const text = "Welcome to BVote 🗳";


const Identify = props => {

    // ApolloClient
    // const apolloClient = useApolloClient();

    useEffect(() => {
        // update the document title
        document.title = "Identification | BVote";
    });


    // const { loading, error, data } = useQuery(getCitizenIdentity, {variables: {cid, email}});
    const [identify, { called, loading, data, error }] = useLazyQuery(
        getCitizenIdentity, {
            onCompleted: () => {
                // TODO: Make data.identify be data.citizen
                // TODO: Use js desctructuring op
                props.history.push("/identification-successed", { citizen: {
                    firstnames: data.identify.firstnames,
                    lastnames: data.identify.lastnames,
                    emails: data.identify.emails,
                    photos: data.identify.photos
                }});
            }
        }
        // {variables: {cid, email}}
        
    );


    return (
        <ReactWaterMark  waterMarkText={text}
            openSecurityDefense
            // securityAlarm={beginAlarm}
            options={reactWaterMarkOptions}
        >
            <div>
                <IdentificationForm action={identify} formType="identify" hasError={error && true}  />
                {/* if data is loading, display a loading message */}
                { loading && <p>loading... </p> }
                { error && console.log(error) } 
                { error && console.warn(error) } 
                { data && console.log("data => ", data.citizen)}
            </div>
        </ReactWaterMark>
    );
};

export default Identify;