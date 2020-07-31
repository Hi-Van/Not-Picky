import React from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './Buttons.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(5),
        },
    },
}));

export default function Buttons() {
    const classes = useStyles();

    return (
        <div className="content">
            <div className="title">
                WELCOME TO
            </div>
            <div className="subtitle">
                !Picky 🥡
            </div>
            <div className="question">What kinds of restuarants do you prefer?</div>
            <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                <Button variant="contained" size="large" color="primary" disableElevation>Fast Food 🍔</Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Coffee ☕</Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Pizza 🍕</Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Italian 🍝</Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Mexican 🌮</Button>
            </Box>

            <div className="question-take">Take Out?</div>
            <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                <Button variant="contained" color="secondary" size="large" disableElevation>Yes 🙌</Button>
                <Button variant="contained" color="secondary" size="large" disableElevation>No 🤷‍♀️</Button>
            </Box>
        </div>
    );
}