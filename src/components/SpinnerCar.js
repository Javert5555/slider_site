import '../css/main-page__item.css';
import spinner from '../img/new_spinner_car.png';

const SpinnerCar = ({ ref, inView }) => {
    return(
        <div ref={ref} className='main-page__item main-page__item_spinnerCar'>
            {/* Spinner */}
            <img className='spinner' src={spinner} alt='Spinner' />
        </div>
    );

};

export default SpinnerCar;