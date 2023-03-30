import React from 'react';
import Nav from '../Nav/Nav';
import style from './header-style.module.css'
const Header = () => {
    return (
        <div>
            <header className={style.header}>
                <h1>Samarin</h1>
                <Nav/>
            </header>
        </div>
    );
};

export default Header;