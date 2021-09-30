// import Navibar from './components/Navibar';
import Header from './components/Header';
import Main from './components/Main';

import { BrowserRouter as Router } from 'react-router-dom';


const App = () => (
    <Router>
        <Header />
        <Main />
    </Router>
);

export default App;
