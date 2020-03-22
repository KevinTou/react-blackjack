import React from "react";
import { connect } from "react-redux";

// Components
import Button from "./Button";

// Actions
import { drawCard, shuffleDeck } from "../actions";

const ButtonContainer = props => {
  const hit = e => {
    e.preventDefault();

    props.drawCard(props.deckID);
  };

  const shuffle = e => {
    e.preventDefault();

    props.shuffleDeck(props.deckID);
  };

  return (
    <>
      <Button title="Re-Shuffle" action={shuffle} />
      <Button title="New Hand" />
      <Button title="Hit" action={hit} />
      <Button title="Stay" />
      <Button title="Split" />
      <Button title="Double" />
    </>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  const { deckID } = gameReducer;
  return {
    deckID
  };
};

export default connect(mapStateToProps, { drawCard, shuffleDeck })(
  ButtonContainer
);
