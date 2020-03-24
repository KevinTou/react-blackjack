import React from "react";
import styled from "styled-components";

const BasicStrategy = () => {
  return (
    <div>
      <h1>Basic Strategy</h1>
      <p>
        When playing Blackjack, the purpose of the game is to beat the dealer. A
        common misconception that people have when playing Blackjack, is that
        they need to get as close as possible to 21. Although having a good hand
        helps, it's not really necessary to win.
      </p>
      <ImageContainer>
        <Image
          src={`https://raw.githubusercontent.com/KevinTou/casino/master/img/basic-strategy.png`}
        />
      </ImageContainer>
    </div>
  );
};

const ImageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
`;

export default BasicStrategy;
