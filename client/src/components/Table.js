import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Components
import DeckForm from "./DeckForm";
import ButtonContainer from "./ButtonContainer";
import Card from "./Card";

// Actions
import { getNewShuffledDeck } from "../actions";
import { checkTotal } from "../util/game";

const Table = props => {
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
        <TableHeader>
          <DeckForm />
          <p>Cards remaining: {props.remainingCards}</p>
        </TableHeader>
        <HandHeader>
          <TableTitle>Dealer's Hand</TableTitle>
          <p>
            Total:{" "}
            {props.dealerHand.length > 1 ? checkTotal(props.dealerHand) : 0}
          </p>
        </HandHeader>
        <CardContainer>
          {props.dealerHand.map(card => {
            return <Card key={card.code} card={card} />;
          })}
        </CardContainer>
        <HandHeader>
          <TableTitle>Player's Hand</TableTitle>
          <p>
            Total:{" "}
            {props.playerHand.length > 1 ? checkTotal(props.playerHand) : 0}
          </p>
        </HandHeader>
        <CardContainer>
          {props.playerHand.map(card => {
            return <Card key={card.code} card={card} />;
          })}
        </CardContainer>
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

const TableTitle = styled.h3`
  margin-bottom: 0.3rem;
`;

const TableHeader = styled.h3`
  display: flex;
  justify-content: space-between;
`;

const HandHeader = styled.div`
  text-align: center;
  margin: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
