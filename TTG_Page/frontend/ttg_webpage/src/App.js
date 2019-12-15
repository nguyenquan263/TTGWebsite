import React, { Component } from 'react';
import './App.css';

import AboutComponent from './components/aboutComponent/aboutComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is TTG WebPage using ReactJS</h1>

        <AboutComponent />
      </div>
    );
  }
}

export default App;
