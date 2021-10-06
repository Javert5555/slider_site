import '../css/navibar.css';
import { Link } from 'react-router-dom';

const Navibar = () => (
    <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>Revolver</Link>
        <Link to='/contact'>Spinner</Link>
    </nav>
);

export default Navibar;