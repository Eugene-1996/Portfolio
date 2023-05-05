import React from 'react';
import style from './text-style.module.css'


const Text = () => {
    return (
        <div className={style.textBlock}>
            <p>Hello, my name is Eugene Samarin</p>
            <p>I am Frontend Developer</p>
        </div>
    );
};

export default Text;