import React, { Component } from 'react';
import MainNavBar from './components/pageHeader.jsx';
import MainSlider from './components/mainSlider.jsx';
import MovieTabs from './components/tabs.jsx';
import SheduleTable from './components/sheduletable.jsx';
import MyForm from './components/myForm.jsx';
import CustomFooter from './components/customFooter.jsx';


require('./css/mainStyles.css');

class App extends Component {
 
    render() {
        return (
            <div>
            	<MainNavBar/>
            	<MainSlider/>
                <MovieTabs/>
                <SheduleTable/>
                <MyForm/>
                <CustomFooter/>
            </div>
        );
    }
}

export default App;
