import React from 'react';
import style from './nav-style.module.css'
const Nav = () => {
    return (
        <div className={style.navLinks}>
            <h4>Main</h4>
            <h4>Skills</h4>
            <h4>Works</h4>
            <h4>Contacts</h4>
        </div>
    );
};

export default Nav;