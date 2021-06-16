import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: black;
  height: 50%;
  margin: auto;
  width: 50%;
  position: fixed;
  background: #ccd5e8;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.95;
  overflow-y: auto;
  padding: 10px;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  border-radius: 10px;
}
`;

const StyledH2 = styled.h2`
  text-align: center;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledCloseBtn = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const CardDetails = ({ selectedCharacter, setSelectedCharacter }) => (
  <StyledDiv>
    <StyledCloseBtn onClick={() => setSelectedCharacter(null)}>
      &#10006;
    </StyledCloseBtn>
    <StyledH2>{selectedCharacter.name}</StyledH2>
    <div>{selectedCharacter.description}</div>
    {selectedCharacter.comics.items.length ? <span>Comics:</span> : null}
    <StyledUl>
      {selectedCharacter.comics.items.map((comic) => (
        <li key={comic.resourceURI}>{comic.name}</li>
      ))}
    </StyledUl>
  </StyledDiv>
);

export default CardDetails;
