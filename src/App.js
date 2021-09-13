// import Navibar from './components/Navibar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
);

export default App;
