import { useState } from 'react';
import './App.css';

function App() {
  const [numberState, setNumberState] = useState({
    number: 0,
  });

  const increaseHandler = () => {
    setNumberState({
      number: numberState.number + 1,
    });
  };

  const decreaseHandler = () => {
    setNumberState({
      number: numberState.number - 1,
    });
  };

  const resetHandler = () => {
    setNumberState({
      number: 0,
    });
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1 className="number">{numberState.number}</h1>
      <div className="container">
        <button className="decrease" onClick={decreaseHandler}>
          decrease
        </button>
        <button className="reset" onClick={resetHandler}>
          reset
        </button>
        <button className="increase" onClick={increaseHandler}>
          increase
        </button>
      </div>
    </div>
  );
}

export default App;
