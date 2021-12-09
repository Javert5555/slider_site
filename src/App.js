import Header from './components/Header';
import MainPage from './components/MainPage';
import WeaponsPage from './components/minor_pages/WeaponsPage';
import SpinnerPage from './components/minor_pages/SpinnerPage';
import AndroidsPage from './components/minor_pages/AndroidsPage';
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
            <Route exact path='/spinner' component={SpinnerPage} />   
            <Route exact path='/androids' component={AndroidsPage} />   
        </Switch>
    </Router>
);

export default App;
