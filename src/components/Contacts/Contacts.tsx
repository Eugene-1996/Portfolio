import React from 'react';
import style from './contacts-style.module.css'
import ContactTable from './ContactTable/ContactTable';
const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <div className={style.touch}>
                    <div>
                        <h3>Let's get in touch</h3>
                        <p>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                    </div>
                    <div>
                        <h5>Living In:</h5>
                        <p>30 Shacham street, Los Angeles, USA.</p>
                    </div>
                    <div>
                        <h5>Call:</h5>
                        <p>(+060) 444 434 444</p>
                    </div>
                </div>
                <div className={style.form}>
                    {/* <h2>Contacts</h2> */}
                    <ContactTable />
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;