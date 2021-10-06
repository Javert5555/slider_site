// import Navibar from './components/Navibar';
import Header from './components/Header';
import MainPage from './components/MainPage';

import { BrowserRouter as Router } from 'react-router-dom';


const App = () => (
    <Router>
        <Header />
        <MainPage />
    </Router>
);

export default App;
