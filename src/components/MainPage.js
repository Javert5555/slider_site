import React from 'react';
import { InView } from 'react-intersection-observer';
import Home from './main_page_components/Home';
import WeaponItem from './main_page_components/WeaponItem';
import SpinnerCarItem from './main_page_components/SpinnerCarItem';
import AndroidsItem from './main_page_components/AndroidsItem';
import '../css/main-page.css';

const mainPageItems = [Home, WeaponItem, SpinnerCarItem, AndroidsItem];

const MainPage = () => {

    return (
        <section className='main-page'>
            {mainPageItems.map((Item, index) => (
                <div className='page' key={index}>
                    <InView key={`main-page__item-${index}`}>
                        {({ inView, ref }) => {
                            return (
                                <div ref={ref}>
                                    <Item isView={inView} />
                                </div>
                            );
                        }}
                    </InView>
                    <div className="gaps" key={`gasp-${index}`}></div>
                </div>
            ))}
        </section>
    );
};

export default MainPage;