import '../css/main-page__item.css';
import revolver from '../img/revolver_main.png';

const Revolver = ({ isView }) => {
    return (
        isView ?
        (<div className='main-page__item main-page__item_revolver'>
            {/* Revolver */}
            <img className='revolver' id='revolver_active' src={revolver} alt="revolver" />
        </div>) :
        (<div className='main-page__item main-page__item_revolver'>
            {/* Revolver */}
            <img className='revolver' src={revolver} alt='revolver' />
        </div>)
    );

};

export default Revolver;