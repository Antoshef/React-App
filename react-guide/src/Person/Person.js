import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = ( props ) => {  
    return <div className="Person">
                <p onClick= { props.click }>I'm { props.name }, and I am a { props.age } years old!</p>
                <p>{ props.children }</p>
                <input type="text" onChange= { props.change } value= { props.name }/> 
            </div>
};

export default Radium(Person);