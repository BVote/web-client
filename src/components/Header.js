import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { Link, withRouter } from "react-router-dom";

import logo from "../img/logo.svg";
import image2vector from "../img/image2vector.svg";
import ButtonAsLink from "./ButtonAsLink";
import { getUserLoggingState } from "../gql/query";
import LightBorderedButton from "../components/LightBorderedButton";
import ColoredCircle from "../components/ColoredCircle";

const UserState = styled.div`
    margin-left: auto;
    margin-right: 30px;

`;

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const LogoText = styled.h1`
    margin: 0;
    padding: 0;
    display: inline;
    // font-weight:normal;
`;

const Header = (props) =>  {

    // query hook for user logged in state
    const { data, client } = useQuery(getUserLoggingState);

    return (
        <HeaderBar>
            <Link to={"/"} style={{textDecoration: "none"}} title="BVote, the confident voting platform">
                {/* <img src={image2vector}  alt="BVote Logo" height="40" /> */}
                <LogoText> 🗳BVote </LogoText> 
                {/* <LogoText> 🗳<i>Bvote</i> </LogoText>  */}
            </Link>
            
            {/* if logged in, display a logout link else display a sign in options */}
            <UserState>
                {
                    data.isLoggedIn ? (
                        <ButtonAsLink onClick={() => {
                            // remove the token
                            localStorage.removeItem("token");
                            client.resetStore();
                            // update the local state
                            client.writeData({
                                data: {isLoggedIn: false}
                            });
                            // redirect the user to the home page
                            props.history.push("/");
                        }}>
                            Log out
                        </ButtonAsLink>
                    ) : (
                        <p>
                            <ColoredCircle background="green" />     {"   "}
                            <Link to={"/apropos"} title="Apropos"><b>APROPOS</b></Link>  or  {"  "}
                            <Link to={"/faqs"} title="Frequently Asked Questions"><b>FAQS </b></Link>
                            
                        </p>
                    )
                }
            </UserState>
        </HeaderBar>
    );
};

export default withRouter(Header);