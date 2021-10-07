import '../css/main-page__item.css';
import revolver from '../img/revolver_main.png';

const Revolver = ({ ref, inView }) => {
    
        {if (inView) {
            return (
                <div ref={ref} className='main-page__item main-page__item_revolver'>
                    <img className='revolver' id='revolver_active' src={revolver} alt='Revolver' />
                </div>
            );
        } else {
            return (
                <div ref={ref} className='main-page__item main-page__item_revolver'>
                    <img className='revolver' src={revolver} alt='Revolver' />
                </div>
            );
        }}
        
    
};

export default Revolver;