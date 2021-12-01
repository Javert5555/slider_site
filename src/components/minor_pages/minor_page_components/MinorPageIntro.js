import React from "react";

const MinorPageIntro = ({ title, typeIntro }) => (
    <div className={`minor-pages__intro ${typeIntro}`} id='header'>
        <div className='minor-pages__intro__filter'></div>
        <h1 className='minor-pages__intro__title'>{title}</h1>
    </div>
);

export default MinorPageIntro;