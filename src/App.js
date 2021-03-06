import React, { useState } from 'react';

import AreaTable from './AreaTable';
import Player from './Player';

import './App.css';

function App() {

  const [ selectedArea, setSelectedArea ] = useState("eastern_norway");

  const handleAreaSelect = (areaValue) => {
    setSelectedArea(areaValue);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Værradar</h1>
      </header>
      <div className="body">
        <AreaTable callbackFunction={handleAreaSelect} selectedArea={selectedArea} />
        <Player className="player-container" selectedArea={selectedArea} />
      </div>
      <div className="github-link">
        <a href="https://github.com/sigvehag">sigvehag - GitHub</a>
      </div>
    </div>
  );
}

export default App;
