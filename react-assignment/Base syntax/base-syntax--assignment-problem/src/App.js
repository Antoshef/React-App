import React, { Component } from 'react';
import './App.css';
import './Components/UserInput';
import './Components/UserOutput';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    users:
          [
            {name: "Anton", day: "Sunday"},
            {name: "Stanimir", day: "Monday"},
            {name: "Kolai", day: "Wednesday"}
          ]
  }

  setNameHandler = (event) => {
    this.setState ( {
      users: 
      [
        {name: event.target.value, day: "Sunday"},
        {name: "Kiro", day: "Monday"},
        {name: "Roki", day: "Tuesday"}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      padding: '20px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <UserInput 
        change= { this.setNameHandler }/>
        <UserOutput 
        name={ this.state.users[0].name } 
        day={ this.state.users[0].day }
        click= { this.setNameHandler }  />
        <UserOutput 
        name={ this.state.users[1].name } 
        day={ this.state.users[1].day } />
        <UserOutput 
        name={ this.state.users[2].name } 
        day={ this.state.users[2].day } />
        <ol style={ style }>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component ( the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state ( an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
