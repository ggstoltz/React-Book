import React from 'react';

function Nav() {
    return (
        <nav className='navbar navbar-expanded navbar-light bg-dark'>
            <a className='navbar-brand' href='/'>React Book</a>

            <ul className='navbar-nav mr-auto'>
                <li className='nav-items'>
                    <a className='nav-link' href='/'>Search</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-links' href='/saved'>Saved</a>
                </li>
            </ul>


        </nav>
    )
};

export default Nav;