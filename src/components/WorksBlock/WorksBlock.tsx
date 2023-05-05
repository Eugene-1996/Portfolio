import React from 'react';
import Work from './Work/Work';
import style from './worksblock-style.module.css'
const Works = () => {
    return (
        <div className={style.works}>
            <div className={style.container}>
                <div className={style.header}> 
                    <h5>Portfolio</h5>
                    <h4>Some of my most recent projects</h4>
                </div>
                <div className={style.itemsContainer}>
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                </div>
            </div>
        </div>
    );
};

export default Works;