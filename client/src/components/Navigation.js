import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/game">Game</StyledNavLink>
      <StyledNavLink to="/rules">Rules</StyledNavLink>
      <StyledNavLink to="/basic_strategy">Basic Strategy</StyledNavLink>
    </StyledNav>
  );
};

const StyledNav = styled.nav``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 1.5rem;
`;

export default Navigation;
