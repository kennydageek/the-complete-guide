import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
  });

  const [otherState, setOtherState] = useState({
    otherState: 'some other value',
  });
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // this.state.persons[0].name = 'Maximilian' DON'T do this!
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 26 },
//   ],
// };
