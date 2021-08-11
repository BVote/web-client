import styled from "styled-components";

const ColoredCircleDiv = styled.div`
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: -2px;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.5px;
    border-color: black;
    height: 20px;
    width: 20px;
`;

const ColoredCircle = ({ color }) => {

    const styles = { backgroundColor: color };
  
    return color ? (
      <Fragment>
        <span style={styles} />
      </Fragment>
    ) : null;
  };


export default ColoredCircle;