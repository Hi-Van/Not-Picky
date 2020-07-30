import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import gMap from "./Map";

function userInterface() {
    return (
        <div>
            <strong> This is the temp component</strong>
            <Route path="/" component={gMap} />
        </div>
    );
}

export default userInterface;