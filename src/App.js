import Header from './components/Header';
import MainPage from './components/MainPage';
import WeaponsPage from './components/weapon_components/WeaponsPage';
import Cursor from './components/Cursor';
import InDevelopment from './components/InDevelopment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <Header />
        <Cursor />
        <Switch>
            <Route exact path='/' component={MainPage} />   
            <Route exact path='/weapon' component={WeaponsPage} />   
            <Route exact path='/spinner' component={InDevelopment} />   
            <Route exact path='/androids' component={InDevelopment} />   
        </Switch>
    </Router>
);

export default App;
