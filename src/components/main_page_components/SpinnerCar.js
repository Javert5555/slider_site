import '../../css/mp_components_styles/main-page__item.css';
import '../../css/mp_components_styles/spinner-item.css';

import spinner from '../../img/new_car2.png';

const SpinnerCar = ({ isView }) => {
    let isActiveSpinner = isView ? 'spinner_active' : '';
    let isActiveSpinnerInfo = isView ? 'main-page__item_spinner__info_active' : '';

    return (
        <div className='main-page__item main-page__item_spinnerCar'>
            <div className='main-page__item_spinner__info' id={isActiveSpinnerInfo}>
                <h2 className='main-page__item_spinner__title'>Spinner</h2>
                
                <img className='spinner' id={isActiveSpinner} src={spinner} alt='Spinner' />
                <div className='main-page__item_spinner__a'>
                    {/* <p className='about-spinner'>Spinner was a type of automobile used by the Los Angeles Police Department. It was utilized extensively by the police to survey the population and was capable of driving on the ground or flying in the air.</p> */}
                    <a href='#' className='main-page__item__a'>read more...</a>
                </div>
            </div>
        </div>
    );
};

export default SpinnerCar;

// className='spinner' id={isActiveSpinner}