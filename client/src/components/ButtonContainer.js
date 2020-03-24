import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import Button from "./Button";

// Actions
import { drawCard, shuffleDeck } from "../actions";

const ButtonContainer = props => {
  return (
    <PlayerActions>
      <DeckActions>
        <Button style={{ marginRight: "1rem" }} title="Reset" />
        <Button style={{ marginRight: "1rem" }} title="Deal" />
      </DeckActions>
      <HandActions>
        <Button style={{ marginLeft: "1rem" }} title="Hit" />
        <Button style={{ marginLeft: "1rem" }} title="Stay" />
        <Button style={{ marginLeft: "1rem" }} title="Split" />
        <Button style={{ marginLeft: "1rem" }} title="Double" />
      </HandActions>
    </PlayerActions>
  );
};

const PlayerActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const DeckActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HandActions = styled.div`
  display: flex;
  flex-start: flex-end;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: flex-end;
    height: 7rem;
    width: 50%;
  }
`;

const mapStateToProps = ({ gameReducer }) => {
  const { deckID, playerHand } = gameReducer;
  return {
    deckID,
    playerHand
  };
};

export default connect(mapStateToProps, { drawCard, shuffleDeck })(
  ButtonContainer
);
