import '../css/main-page__item.css';
import spinner from '../img/new_spinner_car.png';

const SpinnerCar = () => (
    <div className='main-page__item main-page__item_spinnerCar'>
        {/* Spinner */}
        <img className='spinner' src={spinner} />
    </div>
);

export default SpinnerCar;