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
  color: #000000;
  font-size: 1.2rem;

  &.active {
    border-bottom: 2px solid black;
  }

  &:hover {
    border-bottom: 2px solid grey;
  }
`;

export default Navigation;
