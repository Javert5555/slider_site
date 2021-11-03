import React from 'react';
import { InView } from 'react-intersection-observer';
import Home from './main_page_components/Home';
import Weapon from './main_page_components/Weapon';
import SpinnerCar from './main_page_components/SpinnerCar';
import Androids from './main_page_components/Androids';
import '../css/main-page.css';
import Cursor from './Cursor';

const mainPageItems = [Home, Weapon, SpinnerCar, Androids];

const MainPage = () => {

    return (
        <section className='main-page'>
            {mainPageItems.map((Item, index) => (
                <div className='container' key={index}>
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
            <Cursor />
        </section>
    );
};

export default MainPage;

// <InView>
// {({ inView, ref, entry }) => {
//     console.log(inView ? inView : inView)
//     return (
//         <div ref={ref}>
//             <h2>{`Header inside viewport ${inView}.`}</h2>
//         </div>
//     );
// }}
// </InView>
{/* <div className={`main-page__item ${modifClassName}`}>
        <Item />
</div> */}
{/* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />
</Switch> */}