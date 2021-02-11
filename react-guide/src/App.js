import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './Error Boundary/ErrorBoundary';

class App extends Component {
    state = { 
      persons: [
        { id: "as1", name: "Antoshef", age: "34" },
        { id: "as2", name: "Panayot", age: "33" },
        { id: "as3", name: "Lazar", age: "26" }
      ],

      otherState: 'some other value',
      showPerson: false
    }

    deletePerson = (personIndex) => {
      const persons = this.state.persons.slice();
      // const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
    }

    togglePersonHandler = () => {
      let doesShow = this.state.showPerson;
      this.setState( { showPerson: !doesShow } )
    }

    changeNameHandler = (event, key) => {
      const personIndex = this.state.persons.findIndex(p => { return p.id === key });

      const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value;

      const persons = [ ...this.state.persons ];

      persons[personIndex] = person;

      this.setState( { persons: persons } ); 
    }

  render () {
    let persons = null;
    let btnClasses = ['btn'];

    if (this.state.showPerson) {
      btnClasses.push('btn-red');

      persons = 
        <div>
          { this.state.persons.map((person, index) => {
            return <ErrorBoundary><Person 
                      name = { person.name }
                      age = { person.age }
                      key = { person.id }
                      change = {(event) => this.changeNameHandler(event, person.id) }
                    /> </ErrorBoundary>
          })}
        </div>
    }

    let inlineClasses = [];
    
    if (this.state.persons.length <= 2) {
      inlineClasses.push('bold');
    }
    if (this.state.persons.length <= 1) {
      inlineClasses.push('red');
    }

    return (
      <div className="App">
        <h1>Hi I'm a React Application</h1>
        <h3 className={inlineClasses.join(' ')} >This is working Really!?</h3>
        <button 
          className={ btnClasses.join(' ') }
          onClick={ this.togglePersonHandler }>
          Toggle Persons
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
