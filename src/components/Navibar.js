import { Link } from 'react-router-dom';
import '../css/navibar.css';


const Navibar = () => (
        <nav className='nav'>
            <Link to='/'>home</Link>
            <Link to='/weapon'>weapon</Link>
            <Link to='/spinner'>spinner</Link>
            <Link to='/androids'>androids</Link>
        </nav>

);

export default Navibar;