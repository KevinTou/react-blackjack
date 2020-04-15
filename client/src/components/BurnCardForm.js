import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Actions
import { burnCard } from "../actions";

const BurnCardForm = props => {
  return (
    <StyledForm>
      <label htmlFor="burn">
        <input
          type="checkbox"
          name="burn"
          id="burn"
          onChange={props.burnCard}
        />{" "}
        Burn First Card
      </label>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-top: 0.5rem;
`;

export default connect(null, { burnCard })(BurnCardForm);
