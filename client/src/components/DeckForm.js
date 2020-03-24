import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import Button from "./Button";

// Actions
import { getNewShuffledDeck } from "../actions";
import styled from "styled-components";

const DeckForm = props => {
  const [amount, setAmount] = useState(1);

  const handleChange = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.getNewShuffledDeck(amount);
  };

  return (
    <form>
      <fieldset>
        <legend style={{ marginBottom: "1rem" }}>
          Select the number of decks:
        </legend>
        <SelectContainer>
          <StyledLabel htmlFor="amount">
            <StyledSelect
              name="amount"
              id="amount"
              onChange={handleChange}
              autoFocus
            >
              <option value={1}>1 (Default)</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </StyledSelect>
          </StyledLabel>
          <Button
            style={{ marginLeft: "1rem" }}
            title="Change Deck(s)"
            action={handleSubmit}
          />
        </SelectContainer>
      </fieldset>
    </form>
  );
};

const StyledSelect = styled.select`
  padding: 1rem;
  border-radius: 0.5rem;
`;

const StyledLabel = styled.label``;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default connect(null, { getNewShuffledDeck })(DeckForm);
