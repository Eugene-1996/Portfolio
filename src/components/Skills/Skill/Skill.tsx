import React from 'react';
import style from './skill-style.module.css'

type skillPropsType = {
    title: string
    description: string
}

const Skill = (props: skillPropsType) => {
    return (
        <div className={style.skill}>
            <p className={style.icon}>M</p>
            <h2 >{props.title}</h2>
            <div><img alt="wqq"></img></div>
            <span className={style.description}>{props.description}</span>


        </div>
    );
};

export default Skill;