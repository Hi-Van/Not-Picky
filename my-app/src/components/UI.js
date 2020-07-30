import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import gMap from "./Map";
import Buttons from "./Buttons";

function userInterface() {
    return (
        <div>
            <Route path="/" component={Buttons} />
            <Route path="/" component={gMap} />
        </div>
    );
}

export default userInterface;