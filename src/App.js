import logo from './logo.svg';
import './App.css';

import Player from './Player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vær-radar</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Player />
        <img src="https://api.met.no/weatherapi/radar/2.0/.png?area=central_norway&content=image&time=2020-11-06T09%3A00%3A00Z&type=5level_reflectivity" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
