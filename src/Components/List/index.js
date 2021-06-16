import React from "react";
import Card from "../Card";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const List = ({ filteredCharacters, setSelectedCharacter }) => (
  <StyledDiv>
    {filteredCharacters.map((item) => (
      <Card
        key={item.id}
        item={item}
        setSelectedCharacter={setSelectedCharacter}
      />
    ))}
  </StyledDiv>
);

export default List;
