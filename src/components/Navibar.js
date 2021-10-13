import '../css/navibar.css';
import { Link } from 'react-router-dom';

const Navibar = () => (
    <nav className='nav'>
        <Link to='/'>home</Link>
        <Link to='/about'>weapon</Link>
        <Link to='/contact'>spinner</Link>
    </nav>
);

export default Navibar;