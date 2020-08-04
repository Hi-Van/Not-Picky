import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Buttons from "./components/Buttons";
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Buttons} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;