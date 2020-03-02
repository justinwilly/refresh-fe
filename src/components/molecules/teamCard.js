import React from 'react';
import styled from "styled-components";


const Container = styled.div`
width: 40vw;
max-width: 18rem;
max-height: 18rem;
height: 38vw;
box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 3px;
margin: 1rem 0.5rem;
background-color: ${props => props.color};
padding: 1rem;
color: #fff;

@media screen and (max-width: 361px) {
    height: 50vw;
    width: 50vw;
}

@media screen and (min-width: 1200px) {
    max-height: 17rem;
    max-width: 17rem;
}
i {
    /* font-size: calc(100vw / 20); */
font-size: 1rem;
    margin: 2rem 0;
    @media screen and (min-width: 1000px) {
        font-size: calc(100vw / 27);
    }
}

p {
    font-size: 1.6rem;
    letter-spacing: 0.025rem;
    align-self: flex-start;
}

span {
    font-weight: bold;
    align-self: flex-start;
    margin-top: auto;
}`
;

const TeamCard= props => {
  return (
    <Container>
      <div>
        <p>
          Team 1
        </p>
        <p>
          Member 1
        </p>
        <p>
          Member 2
        </p>
      </div>
      <div>
        <button size="small">Edit</button>
      </div>
    </Container>
  );
}

export default TeamCard;