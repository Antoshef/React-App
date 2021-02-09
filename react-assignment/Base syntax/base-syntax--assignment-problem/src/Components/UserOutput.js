import React from 'react';
import '../Components/UserOutput.css';

const UserOutput = ( props ) => {
    return <div className='Output' onClick= { props.click }>
        <p>Hello { props.name }!</p>
        <p>Where have you been at { props.day }.</p>
    </div>
};

export default UserOutput;