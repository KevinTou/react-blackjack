import {
  NEW_DECK_START,
  NEW_DECK_SUCCESS,
  NEW_DECK_FAILURE,
  DRAW_CARD_START,
  DRAW_CARD_SUCCESS,
  PLAYER_DRAW_CARD_SUCCESS,
  DEALER_DRAW_CARD_SUCCESS,
  DRAW_CARD_FAILURE,
  SHUFFLE_START,
  SHUFFLE_SUCCESS,
  SHUFFLE_FAILURE,
  NEW_GAME,
  BURN_CARD_TOGGLE
} from "../actions";

const initialState = {
  deckID: localStorage.getItem("deck_id"),
  playerHand: [],
  dealerHand: [],
  remainingCards: 0,
  gameOver: true,
  burn: false,
  isLoading: false,
  error: false
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_DECK_START:
    case DRAW_CARD_START:
    case SHUFFLE_START:
      return {
        ...state,
        isLoading: true
      };
    case NEW_DECK_SUCCESS:
    case SHUFFLE_SUCCESS:
      return {
        ...state,
        deckID: payload.deck_id,
        remainingCards: payload.remaining,
        playerHand: [],
        dealerHand: [],
        isLoading: false
      };
    case PLAYER_DRAW_CARD_SUCCESS:
      return {
        ...state,
        playerHand: [...state.playerHand, ...payload.cards],
        remainingCards: payload.remaining,
        isLoading: false
      };
    case DEALER_DRAW_CARD_SUCCESS:
      return {
        ...state,
        dealerHand: [...state.playerHand, ...payload.cards],
        remainingCards: payload.remaining,
        isLoading: false
      };
    case DRAW_CARD_SUCCESS:
      return {
        ...state,
        remainingCards: payload.remaining,
        isLoading: false
      };
    case NEW_DECK_FAILURE:
    case DRAW_CARD_FAILURE:
    case SHUFFLE_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    case NEW_GAME:
      return {
        ...state,
        playerHand: [],
        dealerHand: [],
        isLoading: false,
        error: false
      };
    case BURN_CARD_TOGGLE:
      return {
        ...state,
        burn: !state.burn
      };
    default:
      return state;
  }
};

export default gameReducer;
