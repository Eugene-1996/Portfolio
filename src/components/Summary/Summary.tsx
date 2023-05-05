import React from 'react';
import style from './summary-style.module.css'


const Summary = () => {
    return (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.header}>
                    <h5>Resume</h5>
                    <h4>A Summary Of My Resume</h4>
                    </div>
                <div className={style.tables}>
                    <div className={style.education}>
                        <h4>My Education</h4>
                        <div>
                            <div>
                                <h5>Master in Computer Engineering</h5>
                                <span>Harvard University / 2015 - 2017 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</span>
                            </div>
                            <div>
                                <h5>Master in Computer Engineering</h5>
                                <span>Harvard University / 2015 - 2017 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</span>
                            </div>
                            <div>
                                <h5>Master in Computer Engineering</h5>
                                <span>Harvard University / 2015 - 2017 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.experience}>
                        <h4>My Experience</h4>
                        <div>
                            <h5>Sr. Font End Developer</h5>
                            <span>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</span>
                        </div>
                    </div>
                    </div>
                    <div className={style.cv}>
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
    );
};

export default Summary;