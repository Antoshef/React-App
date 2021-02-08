import React from 'react';

const UserOutput = ( props ) => {
    return <div>
        <p>Hello { props.name }!</p>
        <p>Where have you been at { props.day }.</p>
    </div>
};

export default UserOutput;