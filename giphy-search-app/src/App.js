import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './App.css';

import SearchFeatureContainer from './components/SearchFeatureContainer';
import GifBlock from './components/GifBlock';

function App() {
    return ( 
	    <div class="html">
	    <SearchFeatureContainer />	    
	    </div>
	     );
}

export default App;

 