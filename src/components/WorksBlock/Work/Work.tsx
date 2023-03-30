import React from 'react';
import style from './work-style.module.css'

type WorkPropsType = {
    title: string
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.icon}>icon</div>
            <button>Look</button>
            <h5>{props.title}</h5>
            <span>{props.description}</span>
        </div>
    );
};

export default Work;