import Navibar from './Navibar';
import '../css/header.css'

const Header = () => (
    <header className='header'>
        <div className='header__logo'>
            Portfolio
        </div>
        <Navibar />
    </header>
);

export default Header;