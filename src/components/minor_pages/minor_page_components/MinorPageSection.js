import React from "react";
import { InView } from 'react-intersection-observer';
import WeaponsInfo from "./MinorPageInfo";

const MinorPageSection = ({ texts, images, imgTitles, title }) => {

    return (
        <section className='container minor-pages'>
            <h1 className='minor-pages__title'>{title}</h1>
            {texts.map((text, i) => (
                <InView key={`${imgTitles[i].trim()}`}>
                    {({ inView, ref }) => {
                        return (
                            <div ref={ref}>
                                <WeaponsInfo img = {images[i]} imgTitle = {imgTitles[i]} texts = {text} isView={inView} />
                            </div>
                        );
                    }}
                </InView>
            ))}
        </section>
    );
};

export default MinorPageSection;