import React from "react";


const WeaponsInfo = ({ img, imgTitle, texts, isView }) => {
    let isActiveWeaponsInfo = isView ? {
        wpInfo: 'weapons-page__info_active',
        wpInfoImgContainer: 'weapons-page__info__img-container_active',
        wpInfoText: 'weapons-page__info__text_active'
    } : {
        wpInfo: '',
        wpInfoImgContainer: '',
        wpInfoText: ''
    };

    return (
        <div className='weapons-page__info' id={isActiveWeaponsInfo.wpInfo}>
            <div className='weapons-page__info__img-container' id={isActiveWeaponsInfo.wpInfoImgContainer}>
                <img className='weapons-page__info__img' src={img} />
                <p className='weapons-page__info__img-title'>{imgTitle}</p>
            </div>
            <div className='weapons-page__info__text' id={isActiveWeaponsInfo.wpInfoText}>
                { texts.map((text, i)=><p className='weapon-text' key={`pw-text-${i}`}>{text}</p>) }
            </div>
        </div>
    );
};

export default WeaponsInfo;
