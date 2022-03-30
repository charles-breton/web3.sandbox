import React, { Component } from 'react';
import './App.css';

import Viewer from './Viewer/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="modal">
          <div class="modal-content">
            <span class="close-button">×</span>
            <div id="modal-iframe">
              <p>Modal Dummy Text Dolor Ipsum Babylon!</p>
            </div>
          </div>
        </div>
        <iframe id="iframe_custom" >
        </iframe>
        <Viewer />
      </div>
    );
  }
}

export default App;