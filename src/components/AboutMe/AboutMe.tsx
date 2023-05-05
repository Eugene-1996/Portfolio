import React from 'react';
import style from './aboutMe-style.module.css'


const AboutMe = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.aboutme}>
                    <h5>About me</h5>
                </div>
                <div className={style.knowme}>
                    <h4>Know Me More</h4>
                </div>
                <div className={style.name}>
                    <h2>Hi, I'm Eugene Samarin</h2>
                    <h4>
                        I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
                    </h4>
                </div>
                <div className={style.info}>
                    <div>
                        <h6>Name:</h6>
                        <p>Eugene Samarin</p>
                    </div>
                    <div>
                        <h6>Email::</h6>
                        <p>gekasamarin1@gmail.com</p>
                    </div>
                    <div>
                        <h6>Date of birth:</h6>
                        <p>11 November, 1987</p>
                    </div>
                    <div>
                        <h6>From:</h6>
                        <p>Los Angeles, USA.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;