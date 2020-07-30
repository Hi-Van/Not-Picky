/*import React from 'react';
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

export default App;*/

import React from 'react';
import './App.css'

function Buttons() {

  return (
    <div className="content">
      <div className="btn-wrapper">
        <button className="act-btn">Activity 1</button>
        <button className="act-btn">Activity 1</button>
        <button className="act-btn">Activity 1</button>
        <button className="act-btn">Activity 1</button>
        <button className="act-btn">Activity 1</button>
      </div>

      <div className="btn-wrapper">
        <button className="gen-btn">Genre 1</button>
        <button className="gen-btn">Genre 1</button>
        <button className="gen-btn">Genre 1</button>
        <button className="gen-btn">Genre 1</button>
        <button className="gen-btn">Genre 1</button>
      </div>

      <div className="btn-wrapper">
        <button className="take-btn">Yes</button>
        <button className="take-btn">No</button>
      </div>
    </div>
  );
}

export default Buttons;