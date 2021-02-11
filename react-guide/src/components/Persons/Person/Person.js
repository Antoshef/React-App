import React from 'react';
import './Person.css';

const Person = ( props ) => {  
    console.log('[Person.js] rendering...');
    
    return (
            <div className='Person'>
                <p onClick= { props.clicked }>I'm { props.name }, and I am a { props.age } years old!</p>
                <p>{ props.children }</p>
                <input type="text" onChange= { props.changed } value= { props.name }/> 
            </div>
    )
};

export default Person;