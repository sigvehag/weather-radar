import React, { useState } from 'react';

import AreaTable from './AreaTable';
import Player from './Player';

import './App.css';

function App() {

  const [ selectedArea, setSelectedArea ] = useState("eastern_norway");

  const handleAreaSelect = (areaValue) => {
    console.log(areaValue);
    setSelectedArea(areaValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vær-radar</h1>
        <AreaTable callbackFunction={handleAreaSelect} />
        <Player selectedArea={selectedArea} />
      </header>
    </div>
  );
}

export default App;
