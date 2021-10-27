import '../../css/mp_components_styles/main-page__item.css';
import '../../css/mp_components_styles/spinner-item.css';

import spinner from '../../img/new_car2.png';

const SpinnerCar = ({ isView }) => {
    let isActiveSpinner = isView ? {
        img: 'spinner_active',
        Title: 'main-page__item_spinner__title_active',
        aboutSpinnerFirst: 'about-spinner_first_active',
        aboutSpinnerSecondDown: 'about-spinner_second_down_active',
    } : {
        img: '',
        Title: '',
        aboutSpinnerFirst: '',
        aboutSpinnerSecondDown: '',
    }

    return (
        <div className='main-page__item main-page__item_spinnerCar'>
            <div className='main-page__item_spinner__info' id={isActiveSpinner.Info}>
                <h2 className='main-page__item_spinner__title' id={isActiveSpinner.Title}>Spinner</h2>
                <div className='first-info-element'>
                    <img className='spinner' id={isActiveSpinner.img} src={spinner} alt='Spinner' />
                    <p className='about-spinner_first' id={isActiveSpinner.aboutSpinnerFirst}>Designer Mead has described the spinner as an aerodyne – a vehicle which directs air downward to create lift, though press kits for the film stated that the spinner was propelled by three engines: "conventional internal combustion, jet and anti-gravity".</p>   
                </div>
                <div className='about-spinner_second_down' id={isActiveSpinner.aboutSpinnerSecondDown}>
                    <p className='about-spinner_second about_last'>Spinner is the generic term for the fictional flying cars used in the film Blade Runner. A Spinner can be driven as a ground-based vehicle, take off vertically, hover, and cruise using jet propulsion much like the Vertical Take-Off and Landing (VTOL) aircraft currently in use today. They are used extensively by the police to patrol and survey the population, and it is clear that despite restrictions wealthy people can acquire spinner licenses. The vehicle was conceived and designed by Syd Mead and has been "replicated" in subsequent films such as The Fifth Element and the Star Wars prequel trilogy. These films have the popular vision of flying cars, and people use spinners like traditional cars; in Blade Runner, the flying cars substitute for helicopters and very light jets.</p>
                    <div className='main-page__item_spinner__a'>
                        <a href='#' className='main-page__item__a'>read more...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpinnerCar;

// className='spinner' id={isActiveSpinner}