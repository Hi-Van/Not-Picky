import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import userInterface from "./components/UI";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={userInterface} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;