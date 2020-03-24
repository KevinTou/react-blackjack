import React from "react";
import styled from "styled-components";

const Button = ({ title, action, style }) => {
  return (
    <>
      <StyledButton style={style} onClick={action}>
        {title}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  border: none;
  border-radius: 0.3rem;
  width: 5rem;
  height: 3rem;
  background-color: #a9a9a9;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #c3c3c3;
  }

  &:active {
    transform: scale(0.8);
  }
`;

export default Button;
