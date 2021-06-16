import React from "react";
import marvel from "../Images/marvel2.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100px;
`;

const Logo = () => <StyledImg src={marvel} />;

export default Logo;
