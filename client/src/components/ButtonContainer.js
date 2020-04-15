import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import Button from "./Button";
import BurnCardForm from "./BurnCardForm";

// Actions
import { drawCard, shuffleDeck, newGame } from "../actions";
import { checkTotal, getValue } from "../util/game";

const ButtonContainer = props => {
  const shuffle = async e => {
    e.preventDefault();

    await props.shuffleDeck(props.deckID);
    if (props.burn) {
      await props.drawCard(props.deckID, null);
    }
  };

  const drawPlayer = e => {
    e.preventDefault();

    if (checkTotal(props.playerHand) < 21) {
      props.drawCard(props.deckID, "player");
    }
  };

  const double = e => {
    e.preventDefault();

    props.drawCard(props.deckID, "player");
    // End turn
  };

  const startGame = e => {
    props.newGame();
    props.drawCard(props.deckID, "dealer", 2);
    props.drawCard(props.deckID, "player", 2);
  };

  const isPair = hand => {
    if (hand.length === 2) {
      console.log(hand[0]);
      console.log(hand[1]);
      console.log(getValue(hand[0]));
      console.log(getValue(hand[1]));
      return getValue(hand[0]) === getValue(hand[1]);
    }
  };

  return (
    <PlayerActions>
      <DeckActionsContainer>
        <DeckActions>
          <Button
            style={{ marginRight: "1rem" }}
            title="Reset"
            action={shuffle}
          />
          <Button
            style={{ marginRight: "1rem" }}
            title="Deal"
            action={startGame}
          />
        </DeckActions>
        <BurnCardForm />
      </DeckActionsContainer>
      <HandActions>
        {checkTotal(props.playerHand) < 21 && props.playerHand.length > 1 && (
          <Button
            style={{ marginLeft: "1rem" }}
            title="Hit"
            action={drawPlayer}
          />
        )}
        {checkTotal(props.playerHand) < 21 && props.playerHand.length > 1 && (
          <Button style={{ marginLeft: "1rem" }} title="Stay" />
        )}
        {isPair(props.playerHand) && props.playerHand.length === 2 && (
          <Button style={{ marginLeft: "1rem" }} title="Split" />
        )}
        {props.playerHand.length === 2 && (
          <Button
            style={{ marginLeft: "1rem" }}
            title="Double"
            action={double}
          />
        )}
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
const DeckActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  const { deckID, playerHand, remainingCards, burn } = gameReducer;
  return {
    deckID,
    playerHand,
    remainingCards,
    burn
  };
};

export default connect(mapStateToProps, { drawCard, shuffleDeck, newGame })(
  ButtonContainer
);
