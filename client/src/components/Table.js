import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Components
import DeckForm from "./DeckForm";
import ButtonContainer from "./ButtonContainer";

// Actions
import { getNewShuffledDeck } from "../actions";
import { checkTotal } from "../util/game";

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
    <>
      <TableContainer>
        <DeckForm />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Cards remaining: {props.remainingCards}</p>
        </div>
        <h3>Dealer's Hand</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {props.dealerHand.map(card => {
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
        <p>
          Dealer's Total:{" "}
          {props.dealerHand.length > 1 ? checkTotal(props.dealerHand) : 0}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <h3>Player's Hand</h3>
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
          <p>
            Player's Total:{" "}
            {props.playerHand.length > 1 ? checkTotal(props.playerHand) : 0}
          </p>
        </div>
      </TableContainer>
      <ButtonContainer />
    </>
  );
};

const TableContainer = styled.div`
  background-color: #877f82;
  min-height: 60%;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const mapStateToProps = ({ gameReducer }) => {
  const { remainingCards, deckID, playerHand, dealerHand } = gameReducer;
  return {
    remainingCards,
    deckID,
    playerHand,
    dealerHand
  };
};

export default connect(mapStateToProps, { getNewShuffledDeck })(Table);
