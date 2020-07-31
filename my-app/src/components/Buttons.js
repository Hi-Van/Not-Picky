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
                !Picky <span role="img" aria-label="!Picky">🥡</span>
            </div>
            <div className="question">What kinds of restuarants do you prefer?</div>
            <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                <Button variant="contained" size="large" color="primary" disableElevation>Fast Food <span role="img" aria-label="burger">🍔</span></Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Coffee <span role="img" aria-label="coffee">☕</span></Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Pizza <span role="img" aria-label="pizza">🍕</span></Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Italian <span role="img" aria-label="spaghetti">🍝</span></Button>
                <Button variant="contained" size="large" color="primary" disableElevation>Mexican <span role="img" aria-label="taco">🌮</span></Button>
            </Box>

            <div className="question-take">Take Out?</div>
            <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                <Button variant="contained" color="secondary" size="large" disableElevation>Yes 🙌</Button>
                <Button variant="contained" color="secondary" size="large" disableElevation>No 🤷‍♀️</Button>
            </Box>
        </div>
    );
}