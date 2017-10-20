import React, { Component } from 'react';
import MainNavBar from './components/pageHeader.jsx';
import MainSlider from './components/mainSlider.jsx';

require('./css/mainStyles.css');

class App extends Component {
 
    render() {
        return (
            <div>
            	<MainNavBar/>
            	<MainSlider/>
            </div>
        );
    }
}

export default App;
