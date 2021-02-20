import React from 'react';

import classes from './NavMenu.css';

const navMenu = (props) => (
    <div className={classes.NavMenu} onClick={props.openMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default navMenu;