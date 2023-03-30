import React from 'react';
import Skill from '../Skill/Skill';
import style from './skillsblock-style.module.css'
// import containerStyle from '../../../common/styles/container-style.module.css'
const SkillsBlock = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <div className={style.title}> <h2>My Skills</h2></div>
                <div className={style.containerSkills}>
                    <Skill title = {'JS'}  description={'hdshdsdsnsnsnnssnsnsnaaaaaaaaaaaaaaaaaaaaaaaa'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>
                    <Skill title = {'JS'} description={'hdshdsdsnsnsnnssnsnsn'}/>

                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;