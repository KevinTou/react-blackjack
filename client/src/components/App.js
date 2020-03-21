import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./Header";
import Table from "./Table";
import Rules from "./Rules";
import BasicStrategy from "./BasicStrategy";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route path="/game" component={Table} />
        <Route path="/rules" component={Rules} />
        <Route path="/basic_strategy" component={BasicStrategy} />
        <Redirect to="/game" />
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100vh;
`;

export default App;
