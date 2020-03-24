import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import Button from "./Button";

// Actions
import { getNewShuffledDeck } from "../actions";

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
    <>
      <form>
        <fieldset>
          <legend>Select the number of decks:</legend>
          <label htmlFor="amount">
            <select name="amount" id="amount" onChange={handleChange} autoFocus>
              <option value={1}>1 (Default)</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>
          </label>
          <Button title="Change Deck(s)" action={handleSubmit} />
        </fieldset>
      </form>
    </>
  );
};

export default connect(null, { getNewShuffledDeck })(DeckForm);
