import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import { Hello } from './components/hello/hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Counter />
      </header>
    </div>
  );
}

export default App;
