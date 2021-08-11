import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Message from "../var/message";


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


const IdentificationFormError = (props) => { 
    return (
        props.hasError ? 
        (<p style={{textAlign: "center", color: "red", className: "form-error"}}>{Message.identification}</p>) 
        : null
    );
};

const IdentificationForm = (props) => {
    // set the default state of the form
    const [values, setValues] = useState();
    const [hasError, setHasError] = useState(props.hasError);
    // update the state when the user type in the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value.trim()
        });
    };

    const removeErrorMessage = () => {
        // setHasError(false);
        // console.log("hasError => ", hasError);
    }

    return (
        <Wrapper>
            {/* display the appropriate form header */}
            {/* { props.formType === "signup" ? <h2>Sign UpAAAAAAAA</h2> : <h2>Sign InAAAAAAAAA</h2> } */}
            {/* perform the mutation when the user submit the form */}
            {/* <h2> Identify </h2> */}
            
            <Form onSubmit={
                e => {
                    e.preventDefault();
                    props.action({
                        variables: {
                            ...values
                        }
                    });
                }
            }>
            
            <fieldset onClick={removeErrorMessage}>
                <legend> <h2> Identify & Authenticate </h2> </legend>
            <label htmlFor="cid"> Citizen Personal Identificator: </label>
            <input 
                required 
                type="text" 
                id="cid" 
                name="cid" 
                placeholder="Citizen Personal Identification Number" 
                onChange={onChange}
            />

            <label htmlFor="email"> One Email: </label>
            <input 
                required 
                type="email" 
                id="email" 
                name="email" 
                placeholder="one.email@example.com" 
                onChange={onChange}
            />

            <IdentificationFormError hasError={props.hasError} />

            <Button type="submit" style={{padding: "10px"}}>Identify</Button>
            
            </fieldset>
            </Form>
        </Wrapper>
    );
};

export default IdentificationForm;