import React from "react";

// Components
import Navigation from "./Navigation";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Title>Blackjack</Title>
      <Navigation />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10%;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

export default Header;
