import React, { Fragment } from 'react';
import { InView } from 'react-intersection-observer';
import Home from './Home';
import Revolver from './Revolver';
import SpinnerCar from './SpinnerCar';
import '../css/main-page.css';

const mainPageItems = [Home, Revolver, SpinnerCar];

const MainPage = () => {

    return (
        <section className='main-page'>
            {mainPageItems.map((Item, index) => (
                <div className='container' key={index}>
                    <InView key={`main-page__item-${index}`}>
                        {({ inView, ref, entry }) => {
                            {/* console.log(inView); */}
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
            {/* <InView>
                {({ inView, ref, entry }) => {
                    console.log(inView);
                    return (
                        <div ref={ref}>
                            <Home />
                        </div>
                    );
                }}
            </InView>
            <div className="gaps">123</div>
            <InView>
                {({ inView, ref, entry }) => {
                    console.log(inView);
                    return (
                        <div ref={ref}>
                            <Revolver />
                        </div>
                    );
                }}
            </InView>
            <div className="gaps">123</div>
            <InView>
                {({ inView, ref, entry }) => {
                    console.log(inView);
                    return (
                        <div ref={ref}>
                            <SpinnerCar />
                        </div>
                    );
                }}
            </InView> */}
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