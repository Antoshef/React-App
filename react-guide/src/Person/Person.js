import React from 'react';
import './Person.css';

const Person = ( props ) => {  
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error ('Something Wrong !');
    }
    
    return (
            <div className='Person'>
                <p onClick= { props.click }>I'm { props.name }, and I am a { props.age } years old!</p>
                <p>{ props.children }</p>
                <input type="text" onChange= { props.change } value= { props.name }/> 
            </div>
    )
};

export default Person;