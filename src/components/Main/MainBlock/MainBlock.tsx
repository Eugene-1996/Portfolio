import React from 'react';
import Photo from '../Photo/Photo';
import Text from '../Text/Text';
import style from './mainblock-style.module.css'
import containerStyle from '../../../common/styles/container-style.module.css'

const MainBlock = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
            <div className={style.text}><Text /></div>
            <div className={style.photo}><Photo /></div>
            </div>
        </div>
        )
};

export default MainBlock;