import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { animated, useTransition } from 'react-spring';



const Main = () => {
    const location = useLocation();

    const transitions = useTransition(location, {
        key: location.key,
        from: {
            // opacity: 0,
            position: 'absolute',
            width: '100%',
            transform: `translate3d(100%, 0, 0)`,
            // transition: 'transform .2s linear'
        },
        enter: { transform: 'translate3d(0, 0, 0)' },
        leave: {
            opacity: 1,
            transform: `translate3d(-100%, 0, 0)`,
            // transition: 'opacity .5s linear'
        }
    })
    return transitions(( props, item, key ) => (
            <animated.div key={key} style={props}>
                <Switch location={item}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </animated.div>
        )

    // <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/contact" component={Contact} />
    // </Switch>
    );
    
};

export default Main;
