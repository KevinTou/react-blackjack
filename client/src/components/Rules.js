import React from "react";

const Rules = () => {
  return (
    <section>
      <h3>Rules</h3>
      <ol>
        <li>
          The game of Blackjack starts with either a single deck, double deck,
          six deck, or eight deck of cards. There are other variants but these
          are usually the most common.
        </li>
        <li>
          The game usually starts with the dealer burning a card, then the
          players are dealt their cards (starting with the player on the
          dealer's left).
        </li>
        <li>
          The game begins with each player having two cards in their hand and
          the dealer having two cards as well (but only one card being
          "exposed").
        </li>
        <li>
          If the dealer's exposed card is a ten-value card, the dealer will
          check to see if they have Blackjack, in which case, the hand will end.
          If the dealer's exposed card is an Ace, the dealer will offer
          insurance. If the player has Blackjack, they can taken even money, or
          gamble that the dealer doesn't have Blackjack. If the dealer has
          Blackjack, then all the non-Blackjack hands will lose unless the
          player has a Blackjack themselves (in which case, the hand will push)
          and the insurance bets, if any are made, will be paid.
        </li>
        <li>
          If the dealer does not have a Blackjack, then the hand will procede as
          normal and the player will decide what to do based on their hand.
        </li>
        <li>
          Players can either:
          <ul>
            <li>
              <strong>Hit</strong>
            </li>
            <li>
              <strong>Stay</strong>
            </li>
            <li>
              <strong>Double-Down</strong> (if applicable)
            </li>
            <li>
              <strong>Split</strong> (if applicable)
            </li>
            <li>
              <strong>Surrender</strong> (if applicable)
            </li>
          </ul>
        </li>
        <li>
          If the player has Blackjack and the dealer does not, then it as an
          automatic win.
        </li>
        <li>
          If the player decides to hit and goes over 21, then it is considered a
          bust, and the player automatically loses.
        </li>
        <li>
          If the player decides to stay, their turn will end. This will continue
          until all of the players make a decision and then it will be the
          dealer's turn.
        </li>
        <li>
          Based on the house rules, the dealer will continue to hit (if at all)
          until they reach a total of 17 (usually a hard 17).
        </li>
        <li>
          If the dealer busts, the remaining players (whose hand(s) are still in
          play) will win.
        </li>
        <li>
          If the dealer does not bust, then the dealer will compare their hand
          with each player and the highest hand will be considered the winner.
          If the total values are the same, then the player will neither win nor
          lose, which is also known as a push.
        </li>
        <li>
          The dealer will then burn the played cards and begin the next hand.
          This will continue until the deck is finished.
        </li>
      </ol>
      <p>Congratulations! You have now learned the rules for Blackjack!</p>
    </section>
  );
};

export default Rules;
