import React from 'react';
import style from './contacts-style.module.css'
import ContactTable from './ContactTable/ContactTable';
const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <h2>Contacts</h2>
                <ContactTable/>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;