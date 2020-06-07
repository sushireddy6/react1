import React from 'react';
import styled from 'styled-components';

// import './Person.css';
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const patron = props => {
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>
                Patron ID : {props.id}
                Patron Name : {props.name}!
            </p>
        </StyledDiv>
    );
};

export default patron;
