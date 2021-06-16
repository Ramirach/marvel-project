import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledDiv = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const SearchBar = ({ characters, setFilteredCharacters }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    const filteredCharacters = characters.filter(
      (character) =>
        character.name
          .toUpperCase()
          .includes(event.target.value.toUpperCase()) ||
        character.comics.items.some((item) =>
          item.name.toUpperCase().includes(event.target.value.toUpperCase())
        )
    );
    setFilteredCharacters(filteredCharacters);
  };

  return (
    <StyledDiv>
      <Logo />
      <StyledInput value={text} onChange={handleChange} />
    </StyledDiv>
  );
};

export default SearchBar;
