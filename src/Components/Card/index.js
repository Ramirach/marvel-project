import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 300px;
  margin: 50px;
  width: 200px;
  position: relative;
`;

const StyledH2 = styled.h2`
  color: white;
`;

// const StyledFavIcon = styled.div`
//   color: white;
//   position: absolute;
//   right: 10px;
//   cursor: pointer;
// `;

const Card = ({ item, setSelectedCharacter }) => {
  // const handleFavClick = (id) => {
  //   let favs = JSON.parse(sessionStorage.getItem("favs")) || [];
  //   if (!favs.includes(id)) {
  //     favs.push(id);
  //   } else {
  //     favs = favs.filter((fav) => fav !== id);
  //   }
  //   sessionStorage.setItem("favs", JSON.stringify(favs));
  // };

  return (
    <StyledDiv
      image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
      onClick={() => setSelectedCharacter(item)}
    >
      {/* <StyledFavIcon
        onClick={() => handleFavClick(item.id)}
        dangerouslySetInnerHTML={{
          __html: JSON.parse(sessionStorage.getItem("favs")).includes(item.id)
            ? "&#10030;"
            : "&#10032;",
        }}
      /> */}
      <StyledH2>{item.name}</StyledH2>
    </StyledDiv>
  );
};

export default Card;
