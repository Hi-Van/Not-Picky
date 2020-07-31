import React from 'react';
import { Route } from "react-router-dom";
import gMap from "./Map";
import Buttons from "./Buttons";
import './UI.css'

function userInterface() {
    return (
        <div className="ui-wrapper">
            <Route path="/" component={Buttons} />
            <Route path="/" component={gMap} />
        </div>
    );
}

export default userInterface;