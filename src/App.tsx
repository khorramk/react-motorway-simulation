import React from 'react';
import {Road } from './components/Road';
import { LaneMarker } from './components/LaneMarker';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="app">
      <Road>
        <LaneMarker></LaneMarker>
      </Road>
    </div>
  );
}

export default App;
