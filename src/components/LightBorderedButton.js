import styled from "styled-components";

const LightBorderedButton = styled.button`
    width: 220px;
    height: 70px;
    border:none;
    border:solid 1px #0077cc;
    border-radius: 5px;
    background: rgba(255, 255, 255,0);
    font-size: 25px;
    text-align: center;
    border-width: medium;
    color: #0077cc;
    background-image: linear-gradient(to right, #ffffff 0%, #ffffff 70%, #0077cc  100%);

    :hover {
        background:#0077cc;
        color:white; 
        background-image: linear-gradient(to right, #ffffff 0%, #0077cc 30%, #0077cc  100%);
    }

    :active {
        background-color: #005fa3;
        background-image: linear-gradient(to right, #ffffff 0%, #005fa3 30%, #005fa3  100%);
    }
`;


export default LightBorderedButton;




