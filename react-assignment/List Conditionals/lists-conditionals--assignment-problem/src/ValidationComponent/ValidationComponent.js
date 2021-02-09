import React from 'react';

const Validation = ( props ) => {
    return <div>
                Validate:
                 {
                 props.inputLength < 4
                 ? <p>Text too short!</p>
                 : <p>Text long enough</p>
                 }
            </div>
};

export default Validation;