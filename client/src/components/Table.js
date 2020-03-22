import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getNewShuffledDeck } from "../actions";

// Components
import DeckForm from "./DeckForm";
import ButtonContainer from "./ButtonContainer";

const Table = props => {
  console.log(props);

  // If a user doesn't have a deck_id, the game automatically
  // gets a new shuffled single deck to start off with
  useEffect(() => {
    const getDeck = num => {
      props.getNewShuffledDeck(num);
    };

    if (!localStorage.getItem("deck_id")) {
      getDeck(1);
    }
  });

  return (
    <TableContainer>
      <DeckForm />
      <p>Cards remaining: {props.remainingCards}</p>
      <div style={{ display: "flex" }}>
        {props.playerHand.map(card => {
          return (
            <div
              key={card.code}
              style={{
                maxWidth: "15%"
              }}
            >
              <img
                src={card.images.png}
                alt={`${card.value} OF ${card.suit}`}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>

      <ButtonContainer />
    </TableContainer>
  );
};

const TableContainer = styled.div`
  background-color: lightgreen;
  min-height: 70%;
`;

const mapStateToProps = ({ gameReducer }) => {
  const { remainingCards, deckID, playerHand } = gameReducer;
  return {
    remainingCards,
    deckID,
    playerHand
  };
};

export default connect(mapStateToProps, { getNewShuffledDeck })(Table);
