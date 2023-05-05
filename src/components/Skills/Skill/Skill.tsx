import React from 'react';
import style from './skill-style.module.css'

type SkillPropsType = {
    title: string
    img: string
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            {/* <p className={style.icon}>M</p> */}
            <div>
                <img src={props.img} alt="error"></img>
                <h2 >{props.title}</h2>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Skill;