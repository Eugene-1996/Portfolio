import React from 'react';
import Work from './Work/Work';
import style from './worksblock-style.module.css'
const Works = () => {
    return (
        <div className={style.works}>
            <div className={style.container}>
                <h3>My Works</h3>
                <div className={style.itemsContainer}>
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />
                    <Work title={"TodoList"} description={'djdjdjdjdjdjdjaaaa'} />

                </div>
            </div>
        </div>
    );
};

export default Works;