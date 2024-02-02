import React, { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
  const [showClock, setShowClock] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {showClock && <Clock is24Hour={is24Hour} />}
        <button onClick={() => setShowClock(!showClock)}>
          {showClock ? 'Clock Clock' : 'Show Clock'}
        </button>
        <button onClick={() => setIs24Hour(!is24Hour)}>
          Switch to {is24Hour ? '12-hour' : '24-hour'} format
        </button>
      </header>
    </div>
  );
}

export default App;
