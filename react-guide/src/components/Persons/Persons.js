import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  componentWillRecieveProps(props) {
    console.log('[Persons.js] componentWillRecieveProps', props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  render () {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person 
          name = { person.name }
          age = { person.age }
          key = { person.id }
          changed = {(event) => this.props.changed(event, person.id) }
          clicked = {(index) => this.props.clicked(index) }
        />
      );
    });
  }
};

export default Persons;