import React from 'react';
import './cockpit.css';

const cockpit = (props) => {
    let inlineClasses = [];

    let btnClasses = ['btn'];

    if (props.show) {
      btnClasses.push('btn-red');
    }

    if (props.persons.length <= 2) {
      inlineClasses.push('bold');
    }
    if (props.persons.length <= 1) {
      inlineClasses.push('red');
    }

    return (
        <div>
            <h1>{ props.title }</h1>
            <h3 className={inlineClasses.join(' ')} >
                This is working Really!?
            </h3>
            <button 
                className={ btnClasses.join(' ') }
                onClick={ props.toggle }>
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit