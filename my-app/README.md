# [!Picky // IN PROGRESS](https://not-picky.herokuapp.com/)


Table of Contents
=================

   * [Description](#description)
   * [Installation & Usage](#installation-and-usage)
   * [Components](#components)
      * [Genre Button](#genre-button)
      * [Take Out Button](#take-out-button)
      * [Go Button](#go-button)
      * [Map](#map)
   * [Dependencies](#dependencies)


# Description

This web app is built using ReactJS, Material UI, Google Geocode API, Google Maps API, and Google Places API. This web app takes in the user's input and current location to search nearby restaurants that match the query request.

# Installation and Usage

To use !Picky, click the ```genre``` and ```take out``` buttons to indicate your preferred genre and optional take out. Then, scroll down to the ```Go!``` button and click to submit a request. 

The portfolio application requires [Node.js](https://nodejs.org/) to run locally.

First, clone the repository. Then cd into the app, install the dependencies, and start the server.

```
$ cd word-cloud
$ npm install
$ npm start
```

# Components:

### Genre Button

<img src="./header.PNG" width="600"/>

This component component uses ```variant="primary"```, ```Button```, and ```Box``` from the [Material UI dependencies](#dependencies). The dependencies can be imported as ```import { Button, Box } from '@material-ui/core';```. It uses an ```onClick``` function in order to update the current state of the ```genre``` state, which is sent to the [Go!](#go-button) button. An example of the genre buttons and container can be found below:

```
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
        const option = () => {
            this.setState({
                genre: 'put option here'
            })
        }
        return (
          <div>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
              <Button onClick={coffee} variant="contained" size="large" color="primary" disableElevation style={{ margin: '40px' }}>Example</Button>
              // more buttons here
            </Box>
          </div>
        );
      }
    }
```

### Take Out Button

<img src="./word-cloud.PNG" width="600"/>

This component component uses ```variant="secondary"```, ```Button```, and ```Box``` from the [Material UI dependencies](#dependencies). The dependencies can be imported as ```import { Button, Box } from '@material-ui/core';```. It uses an ```onClick``` function in order to update the current state of the ```takeOut``` state, which is sent to the [Go!](#go-button) button. An example of the genre buttons and container can be found below:

```
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
        const option = () => {
            this.setState({
                takeOut: 'put option here'
            })
        }
        return (
          <div>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
              <Button onClick={coffee} variant="contained" size="large" color="secondary" disableElevation style={{ margin: '40px' }}>Example</Button>
              // more buttons here
            </Box>
          </div>
        );
      }
    }
```

### Map

<img src="./input-box.PNG" width="600"/>

This component is a from that accepts the users input text to generate a word cloud. It uses react hooks in order to update the query and material UI button for handling submissions:

```
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setQuery(document.getElementById('inputText').value);
    }
    
    //word cloud code here
    
    series.text = query;
    
    return (
        <div className="App">
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" style={{ marginTop: '10rem' }}>
                <form className="search" onSubmit={handleSubmit}> <input type="text" placeholder="Copy Paste Text.." id="inputText" className="input" /> </form>
                <Button onClick={handleSubmit} variant="contained" size="large" style={{ margin: '20px' }} color='primary' disableElevation>Go!</Button>
            </Box>
        </div>
    );
}

export default App;
```

# Dependencies

Cloudy uses the following dependencies in order to function:

* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [amCharts 4](https://www.amcharts.com/) - A Javascript graphs and charts.
* [Material UI](https://material-ui.com/) - React UI component library designed according to material design standards.
