import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons: [
        { name: "Antoshef", age: "34" },
        { name: "Panayot", age: "33" },
        { name: "Lazar", age: "26" }
      ],

      otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
      this.setState( {
        persons: [
          { name: newName, age: "22" },
          { name: "Panayot", age: "18" },
          { name: "Petyr", age: "15" }
        ]
      });
    }

    changeNameHandler = (event) => {
      this.setState( {
        persons: [
          { name: 'Antoshef', age: "22" },
          { name: "Panayot", age: "18" },
          { name: event.target.value, age: "15" }
        ]
      });
    }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <h1>Hi I'm a React Application</h1>
        <h3>This is working Really!?</h3>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Tony') }>Switch Name</button>
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}/>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}
        click = { this.switchNameHandler.bind(this, 'Anton') } 
        change = { this.changeNameHandler } >My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//     const [personState, setPersonState] = useState ({
//       persons: [
//         { name: "Antoshef", age: "34" },
//         { name: "Panayot", age: "33" },
//         { name: "Lazar", age: "26" }
//       ],
//     });

//     const [otherState, setOtherState] = useState('other state set');

//     console.log(personState, otherState);

//     const switchNameHandler = () => {
//       setPersonState( {
//         persons: [
//           { name: "Nikolay", age: "22" },
//           { name: "Panayot", age: "18" },
//           { name: "Petyr", age: "15" }
//         ]
//       });
//     }

//     return (
//       <div className="App">
//         <h1>Hi I'm a React Application</h1>
//         <h3>This is working Really!?</h3>
//         <button onClick={ switchNameHandler }>Switch Name</button>
//         <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
//         <Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
//         <Person name = {personState.persons[2].name} age = {personState.persons[2].age}>My Hobbies: Racing</Person>
//       </div>
//     );
// }

// export default app;
