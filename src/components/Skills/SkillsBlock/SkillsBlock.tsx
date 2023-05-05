import React from 'react';
import Skill from '../Skill/Skill';
import style from './skillsblock-style.module.css'
import { SkillsPropsType } from '../../../App';
// import containerStyle from '../../../common/styles/container-style.module.css'


export type SkillsBlockPropsType = {
    skills: SkillsPropsType[]
}


const SkillsBlock = (props: SkillsBlockPropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <div className={style.whatido}>
                    <h5>What I Do?</h5>
                </div>
                <div className={style.title}>
                    <h2>My skills which can help your project</h2>
                </div>

                <div className={style.containerSkills}>
                    {props.skills.map(s => {
                        return (
                            <Skill title={s.title} img={s.img} description={s.describe} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;