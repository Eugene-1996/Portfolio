import React from 'react';
import style from './remote-style.module.css'

const Remote = () => {
    return (
        <div className={style.remote}>
            <div className={style.container}>
                <div className={style.title}>Open For Remote</div>
                <button>Hire me</button>
            </div>
        </div>
    );
};

export default Remote;