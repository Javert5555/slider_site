import React from "react";

const WeaponsInfo = ({ img, texts }) => (
    <div className='weapons-page__info'>
        <div className='weapons-page__info__img-container'>
            <img className='weapons-page__info__img' src={img} />
            <p className='weapons-page__info__img-title'>Railgun</p>
        </div>
        <div className='weapons-page__info__text'>
            { texts.map((text)=><p className='weapon-text'>{text}</p>) }
        </div>
    </div>
);

export default WeaponsInfo;
