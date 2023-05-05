import React from 'react';
import style from './footer-style.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div>
                <h4>Samarin Evgeniy</h4>
                </div>
                <div>
                <p>Copyright © 2023 Callum. All Rights Reserved.</p>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;