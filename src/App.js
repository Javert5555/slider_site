import Header from './components/Header';
import MainPage from './components/MainPage';
import Weapon from './components/weapon_components/Weapon';
import Cursor from './components/Cursor';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => (
    <Router>
        <Header />
        <Cursor />
        <Switch>
            <Route exact path='/' component={MainPage} />   
            <Route exact path='/weapon' component={Weapon} />   
            <Route exact path='/spinner' component={MainPage} />   
            <Route exact path='/androids' component={MainPage} />   
        </Switch>
    </Router>
);

export default App;
