import React from "react";
import { InView } from 'react-intersection-observer';
import WeaponsInfo from "./MinorPageInfo";

const MinorPageSection = ({ texts, images, imgTitles, title }) => {

    return (
        <section className='container minor-pages'>
            <InView>
                {({ inView, ref }) => {
                    let isActiveMinorPageTitle = inView ?
                        {
                            activeTitleContainer: 'minor-pages__title-container_active',
                            activeTitle: 'minor-pages__title_active',
                        } : 
                        {
                            activeTitleContainer: '',
                            activeTitle: '',
                        };
                    return(
                        <div ref={ref} id={isActiveMinorPageTitle.activeTitleContainer}>
                            <h1 className='minor-pages__title' id={isActiveMinorPageTitle.activeTitle}>{title}</h1>
                        </div>
                    );
                }}
            </InView>
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