import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Buttons.css';

const useStyles = makeStyles((theme) => ({
    addMargin: {
        '& > *': {
            margin: theme.spacing(5),
        },
    },
    search: {
        '& > *': {
            color: '#7a7a7a',
            margin: theme.spacing(1),
        },
    }
}));

export default function Buttons() {
    const classes = useStyles();
    const [takeout, setTakeout] = useState('');
    const [genre, setGenre] = useState('');
    let test = '';

    //inputs for genres, ordered as they would appear
    const coffee = () => {
        setGenre('coffee');
    }
    const boba = () => {
        setGenre('boba');
    }
    const bakery = () => {
        setGenre('bakery');
    }
    const bbq = () => {
        setGenre('barbeque');
    }
    const diner = () => {
        setGenre('diner');
    }
    const family = () => {
        setGenre('family');
    }
    const fastFood = () => {
        setGenre('fast food');
    }
    const pizza = () => {
        setGenre('pizza');
    }
    const italian = () => {
        setGenre('italian');
    }
    const french = () => {
        setGenre('french');
    }
    const mexican = () => {
        setGenre('mexican');
    }
    const mediterranean = () => {
        setGenre('mediterranean');
    }
    const chinese = () => {
        setGenre('chinese');
    }
    const japanese = () => {
        setGenre('japanese');
    }
    const korean = () => {
        setGenre('korean');
    }
    const thai = () => {
        setGenre('thai');
    }


    //inputs for take out
    const takeTrue = () => {
        setTakeout('take out');
    }
    const takeFalse = () => {
        setTakeout('');
    }

    return (
        <div className="content">
            <div className="title">
                WELCOME TO
            </div>
            <div className="subtitle">
                !Picky <span role="img" aria-label="!Picky">🥡</span>
            </div>
            <div className="question">What kinds of restaurants do you prefer?</div>
            <Box className={classes.addMargin} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                <Button onClick={coffee} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="coffee">Coffee ☕</span></Button>
                <Button onClick={boba} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Boba 🥤</span></Button>
                <Button onClick={bakery} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Bakery 🍪</span></Button>
                <Button onClick={bbq} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Barbeque 🍗</span></Button>
                <Button onClick={diner} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Diner 🥞</span></Button>
                <Button onClick={family} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Family 👪</span></Button>
                <Button onClick={fastFood} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="burger">Fast Food 🍔</span></Button>
                <Button onClick={pizza} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="pizza">Pizza 🍕</span></Button>
                <Button onClick={italian} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="spaghetti">Italian 🍝</span></Button>
                <Button onClick={french} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="spaghetti">French 🥐</span></Button>
                <Button onClick={mexican} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Mexican 🌮</span></Button>
                <Button onClick={mediterranean} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Mediterranean 🥗</span></Button>
                <Button onClick={chinese} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Chinese 🥡</span></Button>
                <Button onClick={japanese} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Japanese 🍣</span></Button>
                <Button onClick={korean} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Korean 🥘</span></Button>
                <Button onClick={thai} variant="contained" size="large" color="primary" disableElevation><span role="img" aria-label="taco">Thai 🍛</span></Button>
            </Box>

            <div className="question-take">Take Out?</div>
            <Box className={classes.addMargin} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                <Button onClick={takeTrue} variant="contained" color="secondary" size="large" disableElevation><span role="img" aria-label="yes">Yes 🙌</span></Button>
                <Button onClick={takeFalse} variant="contained" color="secondary" size="large" disableElevation><span role="img" aria-label="no">No 🤷‍♀️</span></Button>
            </Box>

            <Box className={classes.search} display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="center">
                <div className="searchInput"><p>' {genre} ' + ' {takeout} ' + restaurants near me</p></div>
                <Button variant="contained" size="large" disableElevation>Go!</Button>
            </Box>
        </div>
    );
}