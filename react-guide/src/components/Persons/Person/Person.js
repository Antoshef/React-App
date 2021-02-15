import React, { Component } from "react";
import "./Person.css";
import Aux from "../../../containers/Auxillary/Auxillary";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      // <div className='Person'>
      <Aux>
        <p onClick={this.props.clicked}>
          I'm {this.props.name}, and I am a {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      /* </div> */
    );
  }
}

export default Person;
