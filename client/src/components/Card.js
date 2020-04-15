import React from "react";

const Card = ({ card }) => {
  return (
    <div
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
};

export default Card;
