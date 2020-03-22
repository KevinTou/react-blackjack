import axios from "axios";

export const NEW_DECK_START = "NEW_DECK_START";
export const NEW_DECK_SUCCESS = "NEW_DECK_SUCCESS";
export const NEW_DECK_FAILURE = "NEW_DECK_FAILURE";

export const getNewShuffledDeck = amount => {
  return async dispatch => {
    dispatch({ type: NEW_DECK_START });

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${amount}`
      );
      console.log("results :", res.data);

      localStorage.setItem("deck_id", res.data.deck_id);

      dispatch({ type: NEW_DECK_SUCCESS, payload: res.data });

      return res.data.deck_id;
    } catch (err) {
      console.log("Error: ", err);
      dispatch({ type: NEW_DECK_FAILURE, payload: err.response });
    }
  };
};

/*
  getNewShuffledDeck -> DATA OBJECT - res.data
  {
    remaining: 52,
    success: true,
    shuffled: true,
    deck_id: "kk6mzgyzu8pp"
  };
*/

export const DRAW_CARD_START = "DRAW_CARD_START";
export const DRAW_CARD_SUCCESS = "DRAW_CARD_SUCCESS";
export const DRAW_CARD_FAILURE = "DRAW_CARD_FAILURE";

export const drawCard = (deck_id, amount = 1) => {
  return async dispatch => {
    dispatch({ type: DRAW_CARD_START });

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${amount}`
      );
      console.log("results: ", res.data);

      dispatch({ type: DRAW_CARD_SUCCESS, payload: res.data });

      return res.data.cards[0];
    } catch (err) {
      console.log("Error: ", err);
      dispatch({ type: DRAW_CARD_FAILURE, payload: err.response });
    }
  };
};

/*
drawCard -> DATA OBJECT - res.data.cards[0]
{
  code: "JH",
  image: "https://deckofcardsapi.com/static/img/JH.png",
  value: "JACK",
  suit: "HEARTS",
  images: {
    svg: "https://deckofcardsapi.com/static/img/JH.svg",
    png: "https://deckofcardsapi.com/static/img/JH.png"
  }
}
*/

export const SHUFFLE_START = "SHUFFLE_START";
export const SHUFFLE_SUCCESS = "SHUFFLE_SUCCESS";
export const SHUFFLE_FAILURE = "SHUFFLE_FAILURE";

export const shuffleDeck = deck_id => {
  return async dispatch => {
    dispatch({ type: SHUFFLE_START });

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`
      );
      console.log("results: ", res.data);

      dispatch({ type: SHUFFLE_SUCCESS, payload: res.data });

      return res.data.remaining;
    } catch (err) {
      console.log("Error: ", err);
      dispatch({ type: SHUFFLE_FAILURE, payload: err.response });
    }
  };
};

/*
  shuffleDeck -> DATA OBJECT - res.data
  {
    "success": true,
    "deck_id": "kk6mzgyzu8pp",
    "shuffled": true,
    "remaining": 52
  }
  */
