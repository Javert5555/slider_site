import { Link } from 'react-router-dom';
import '../css/navibar.css';


const Navibar = () => (
        <nav className='nav'>
            <Link to='/'>home</Link>
            <Link to='/weapon'>weapons</Link>
            <Link to='/spinner'>spinner</Link>
            <Link to='/androids'>androids</Link>
        </nav>

);

export default Navibar;