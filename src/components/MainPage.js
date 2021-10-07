import React from 'react';
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
            <Item key={`mainPageItems-${index}`} />
        ))}
            {/* <Home />
            <Revolver />
            <SpinnerCar />
            <InView>
                {({ inView, ref, entry }) => {
                    console.log(inView ? inView : inView)
                    return (
                        <div ref={ref}>
                            <h2>{`Header inside viewport ${inView}.`}</h2>
                        </div>
                    );
                }}
            </InView> */}
        </section>
    );
};

export default MainPage;
{/* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />
</Switch> */}