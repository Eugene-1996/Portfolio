import React from 'react';
import MyPhoto from '../../../assets/images/main.jpeg'
import style from './photo-style.module.css'

const Photo = () => {
    return (
        <div className={style.img}>
             <img alt='my' src={MyPhoto}></img>
        </div>
    );
};

export default Photo;