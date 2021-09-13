import '../css/navibar.css';
import { Link } from 'react-router-dom';

const Navibar = () => (
    <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
);

export default Navibar;