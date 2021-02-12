import React, { Component } from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillRecieveProps', props);
  // }

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

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  clicked: PropTypes.func,
}

export default Persons;