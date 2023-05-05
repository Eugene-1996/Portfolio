import React from 'react';
import style from './contacttable-style.module.css'
const ContactTable = () => {
    return (
        <div className={style.contactTable}>
            <div>
                <h3>Estimate your Project?</h3>
            </div>
            <div>
                <div>
                    <h4>What is Your Name:</h4>
                    <input type='text'></input>
                </div>
                <div>
                    <h4>Your Email Address:</h4>
                    <input type='text'></input>
                </div>
            </div>
            <div>
                <h4>How can I Help you?:</h4>
                <textarea>Hekdskdksdsdsk</textarea>
            </div>
        </div>
    );
};

export default ContactTable;