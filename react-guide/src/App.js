import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

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

    if (this.state.showPerson) {
      persons = 
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
                      click = {() => { this.deletePerson(index) } }
                      name = { person.name }
                      age = { person.age }
                      key = { person.id }
                      change = {(event) => this.changeNameHandler(event, person.id) }
                    />
          })}
        </div>
    }

    let classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }
    if (this.state.persons.length <= 1) {
      classes.push('red');
    }

    return (
      <div className="App">
        <h1>Hi I'm a React Application</h1>
        <h3 className={classes.join(' ')} >This is working Really!?</h3>
        <StyledButton 
          alt={ this.state.showPerson }
          onClick={ this.togglePersonHandler }>
          Toggle Persons
        </StyledButton>
        { persons }
      </div>
    );
  }
}

export default App;
