import { NEW_DECK_START, NEW_DECK_SUCCESS, NEW_DECK_FAILURE } from "../actions";

const initialState = {
  playerHand: [],
  dealerHand: [],
  remainingCards: 0,
  isLoading: false,
  error: false,
  deckID: localStorage.getItem("deck_id")
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_DECK_START:
      return {
        ...state,
        isLoading: true
      };
    case NEW_DECK_SUCCESS:
      return {
        ...state,
        deckID: payload.deck_id,
        remainingCards: payload.remaining,
        isLoading: false
      };
    case NEW_DECK_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default gameReducer;
