import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavMenu from '../NavMenu/NavMenu';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <NavMenu openMenu={props.openMenu} />
        <div className={classes.Logo}>
            <Logo />   
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;