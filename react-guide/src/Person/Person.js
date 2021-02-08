import React from 'react'

const Person = ( props ) => {
    return <div>
                <p onClick= { props.click }>I'm { props.name }, and I am a { props.age } years old!</p>
                <p>{ props.children }</p>
                <input type="text" onChange= { props.change } value= { props.value }/>
            </div>
};

export default Person;