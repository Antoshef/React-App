import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/CockPit/cockpit';
// import ErrorBoundary from '../Error Boundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor'); 
    this.state = {
      persons: [
        { id: "as1", name: "Antoshef", age: "34" },
        { id: "as2", name: "Panayot", age: "33" },
        { id: "as3", name: "Lazar", age: "26" }
      ],

      otherState: 'some other value',
      showPerson: false,
      showCockpit: true,
      changeCounter: 0
    }
  }

    static getDerivedStateFromProps(props, state) {
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    }

    componentDidMount() {
      console.log('[App.js] componentDidMount');
    }

    deletePerson = (personIndex) => {
      const persons = this.state.persons.slice();
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

      this.setState((prevState, props) => { 
        return {
          persons: persons, 
          changeCounter: prevState.changeCounter + 1
        }
      } ); 
    }

  render () {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPerson) {
      persons = (
          <Persons 
            persons = { this.state.persons }
            clicked = { this.deletePerson }
            changed = { this.changeNameHandler }/>
        )
    }

    return (
      <div className="App">
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ?
        <Cockpit 
          title = { this.props.appTitle }
          toggle = { this.togglePersonHandler }
          persons = { this.state.persons }
          show = { this.state.showPerson }/> : null
        }
        { persons }
      </div>
    );
  }
}

export default App;
