import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Revolver from './Revolver';
import SpinnerCar from './SpinnerCar';
import '../css/main-page.css'



const MainPage = () => {
    return (
        <section className='main-page'>
            <Home />
            <Revolver />
            <SpinnerCar />
        </section>
    );
};

export default MainPage;
{/* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />
</Switch> */}