import React, { Component } from 'react';
import './App.css';

import Viewer from './Viewer/';
import Fps from './Viewer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Fps />
        <Viewer />
      </div>
    );
  }
}

export default App;