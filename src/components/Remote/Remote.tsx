import React from 'react';
import style from './remote-style.module.css'

const Remote = () => {
    return (
        <div className={style.remote}>
            <div className={style.container}>
                <div className={style.title}>
                    <h5>Interested in working with me?</h5>
                </div>
                <button>Hire me!</button>
            </div>
        </div>
    );
};

export default Remote;