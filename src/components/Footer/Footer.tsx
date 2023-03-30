import React from 'react';
import style from './footer-style.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h4>Samarin Evgeniy</h4>
                <p>Content</p>
                <p>2023</p>
            </div>
        </div>
    );
};

export default Footer;