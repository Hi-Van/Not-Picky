import React from 'react';
import { Button, Box } from '@material-ui/core';
import './Buttons.css';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: '',
            takeOut: '',
            searchInput: ''
        };
    }

    render() {
        //inputs for genres, ordered as they would appear on screen
        const coffee = () => {
            this.setState({
                genre: 'coffee'
            })
        }
        const boba = () => {
            this.setState({
                genre: 'boba'
            })
        }
        const bakery = () => {
            this.setState({
                genre: 'bakery'
            })
        }
        const bbq = () => {
            this.setState({
                genre: 'barbeque'
            })
        }
        const diner = () => {
            this.setState({
                genre: 'diner'
            })
        }
        const family = () => {
            this.setState({
                genre: 'family'
            })
        }
        const fastFood = () => {
            this.setState({
                genre: 'fast food'
            })
        }
        const pizza = () => {
            this.setState({
                genre: 'pizza'
            })
        }
        const italian = () => {
            this.setState({
                genre: 'italian'
            })
        }
        const french = () => {
            this.setState({
                genre: 'french'
            })
        }
        const mexican = () => {
            this.setState({
                genre: 'mexican'
            })
        }
        const mediterranean = () => {
            this.setState({
                genre: 'mediterranean'
            })
        }
        const chinese = () => {
            this.setState({
                genre: 'chinese'
            })
        }
        const japanese = () => {
            this.setState({
                genre: 'japanese'
            })
        }
        const korean = () => {
            this.setState({
                genre: 'korean'
            })
        }
        const thai = () => {
            this.setState({
                genre: 'thai'
            })
        }

        //inputs for optional take out
        const take = () => {
            this.setState({
                takeOut: 'take out'
            })
        }
        const noTake = () => {
            this.setState({
                takeOut: ''
            })
        }

        //Search Query with 'Go!' button
        const goButton = () => {
            this.setState({
                searchInput: this.state.genre + ' ' + this.state.takeOut + ' restaurants'
            })
        }


        //material UI buttons and styling
        return (
            <div className="content">
                <div className="title">
                    WELCOME TO
            </div>
                <div className="subtitle">
                    !Picky <span role="img" aria-label="!Picky">🥡</span>
                </div>
                <div className="tertiary-title">
                    Restaurant Locator Web App
            </div>
                <div className="question">What kinds of restaurants do you prefer?</div>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                    <Button onClick={coffee} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="coffee" >Coffee ☕</span></Button>
                    <Button onClick={boba} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Boba 🥤</span></Button>
                    <Button onClick={bakery} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Bakery 🍪</span></Button>
                    <Button onClick={bbq} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Barbeque 🍗</span></Button>
                    <Button onClick={diner} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Diner 🥞</span></Button>
                    <Button onClick={family} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Family 👪</span></Button>
                    <Button onClick={fastFood} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="burger">Fast Food 🍔</span></Button>
                    <Button onClick={pizza} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="pizza">Pizza 🍕</span></Button>
                    <Button onClick={italian} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="spaghetti">Italian 🍝</span></Button>
                    <Button onClick={french} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="spaghetti">French 🥐</span></Button>
                    <Button onClick={mexican} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Mexican 🌮</span></Button>
                    <Button onClick={mediterranean} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Mediterranean 🥗</span></Button>
                    <Button onClick={chinese} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Chinese 🥡</span></Button>
                    <Button onClick={japanese} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Japanese 🍣</span></Button>
                    <Button onClick={korean} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Korean 🥘</span></Button>
                    <Button onClick={thai} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="taco">Thai 🍛</span></Button>
                </Box>

                <div className="question-take">Take Out?</div>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                    <Button onClick={take} variant="contained" color="secondary" size="large" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="yes">Yes 🙌</span></Button>
                    <Button onClick={noTake} variant="contained" color="secondary" size="large" disableElevation style={{ margin: '40px' }}><span role="img" aria-label="no">No 🙅‍♀️</span></Button>
                </Box>

                <Box display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="center">
                    <div className="searchInput"><p>' {this.state.genre} ' + ' {this.state.takeOut} ' + restaurants near me</p></div>
                    <Button onClick={goButton} variant="contained" size="large" style={{marginLeft: '16px', color: '#707070'}} disableElevation>Go!</Button>
                </Box>
            </div>
        );
    }
}

export default Buttons;