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

const   VerificationFormError = (props) => { 
    return (
        props.hasError ? 
        (<p style={{textAlign: "center", color: "red", className: "form-error"}}>{Message.identification}</p>) 
        : null
    );
};

const VerificationForm = props => {
    // set the default state of the form
    const [value, setValue] = useState(
        { content: props.pseudonym || "" }
    );

    const onChange = event => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    };


    const removeErrorMessage = () => {
        // setHasError(false);
        // console.log("hasError => ", hasError);
    }

    return (
        <Wrapper>
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
                <legend> <h2> Verify Vote </h2> </legend>
            <label htmlFor="pseudonym"> Your Pseudonym: </label>
            <input 
                required 
                title="Put your pseudonym here"
                type="text" 
                id="pseudonym" 
                name="pseudonym" 
                placeholder="SXndrzA2I2I098U2JNS" 
                onChange={onChange}
            />

            <VerificationFormError hasError={props.hasError} />

            <Button type="submit" style={{padding: "10px"}}>Verify</Button>
            
            </fieldset>
            </Form>
        </Wrapper>
    );
};

export default VerificationForm;