import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import userInterface from "./components/UI";
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={userInterface} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;