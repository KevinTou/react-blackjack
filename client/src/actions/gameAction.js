import axios from "axios";

export const NEW_DECK_START = "NEW_DECK_START";
export const NEW_DECK_SUCCESS = "NEW_DECK_SUCCESS";
export const NEW_DECK_FAILURE = "NEW_DECK_FAILURE";

export const getNewShuffledDeck = amount => {
  return async dispatch => {
    dispatch({ type: NEW_DECK_START });

    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${amount}`
      );
      // console.log("results :", res.data);

      localStorage.setItem("deck_id", res.data.deck_id);
      dispatch({ type: NEW_DECK_SUCCESS, payload: res.data });
      /*
        RETURN OBJECT - res.data
        {
          remaining: 52,
          success: true,
          shuffled: true,
          deck_id: "kk6mzgyzu8pp"
        };
      */

      return res.data.deck_id;
    } catch (err) {
      // console.log("Error: ", err.response);
      dispatch({ type: NEW_DECK_FAILURE, payload: err.response });
    }
  };
};

// export const drawCard = async (deck_id, amount) => {
//   const res = await axios.get(
//     `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${amount}`
//   );

//   console.log("results: ", res.data);

//   /*
//   RETURN OBJECT
//   {
//     code: "JH",
//     image: "https://deckofcardsapi.com/static/img/JH.png",
//     value: "JACK",
//     suit: "HEARTS",
//     images: {
//       svg: "https://deckofcardsapi.com/static/img/JH.svg",
//       png: "https://deckofcardsapi.com/static/img/JH.png"
//     }
//   }
//   */

//   return res.data.cards[0];
// };

// export const shuffleDeck = async deck_id => {
//   const res = await axios.get(
//     `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`
//   );

//   console.log("results: ", res.data);

//   /*
//   RETURN OBJECT
//   {
//     "success": true,
//     "deck_id": "kk6mzgyzu8pp",
//     "shuffled": true,
//     "remaining": 52
//   }
// */

//   return res.data.remaining;
// };
