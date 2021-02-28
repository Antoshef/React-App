import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    let handleClick = () => setClick(!click);
    let closeMobileMenu = () => setClick(false);

    let showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        };
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>   
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>   
                    <ul>
                        <li className='nav-item'>
                            <Link 
                                className='nav-links'    
                                to='/' 
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                className='nav-links'    
                                to='/services' 
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                className='nav-links'    
                                to='/products' 
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                className='nav-links-mobile'    
                                to='/sign-up' 
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>      
                </div>
            </nav>
        </>
    )
}

export default Navbar
