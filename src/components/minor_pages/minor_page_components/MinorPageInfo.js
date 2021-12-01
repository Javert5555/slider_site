import React from "react";


const MinorPageInfo = ({ img, imgTitle, texts, isView }) => {
    let isActiveMinorPageInfo = isView ? {
        mpInfo: 'minor-pages__info_active',
        mpInfoImgContainer: 'minor-pages__info__img-container_active',
        mpInfoText: 'minor-pages__info__text_active'
    } : {
        mpInfo: '',
        mpInfoImgContainer: '',
        mpInfoText: ''
    };

    return (
        <div className='minor-pages__info' id={isActiveMinorPageInfo.mpInfo}>
            <div className='minor-pages__info__img-container' id={isActiveMinorPageInfo.mpInfoImgContainer}>
                <img className='minor-pages__info__img' src={img} alt={imgTitle} />
                <p className='minor-pages__info__img-title'>{imgTitle}</p>
            </div>
            <div className='minor-pages__info__text' id={isActiveMinorPageInfo.mpInfoText}>
                { texts.map((text, i)=><p className='minor-pages__text' key={`pw-text-${i}`}>{text}</p>) }
            </div>
        </div>
    );
};

export default MinorPageInfo;
