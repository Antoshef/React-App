import React from 'react';
// import './Person.css';
import styled from "styled-components";

const StyledDiv = styled.div`
                    margin: 16px auto;
                    width: 60%;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 16px;
                    text-align: center;

                    @media (min-width: 500px) {
                        width: 450px;
                    }
                `

const Person = ( props ) => {  
    return (
            // <div className="Person">
            <StyledDiv>
                <p onClick= { props.click }>I'm { props.name }, and I am a { props.age } years old!</p>
                <p>{ props.children }</p>
                <input type="text" onChange= { props.change } value= { props.name }/> 
            </StyledDiv>
    )
    
};

export default Person;