import '../../css/mp_components_styles/main-page__item.css';
import '../../css/mp_components_styles/spinner-item.css';

const SpinnerCarItem = ({ isView }) => {
    let isActiveSpinner = isView ? {
        img: 'spinner_active',
        title: 'main-page__item_spinner__title_active',
        aboutSpinner: 'about-spinner_active',
    } : {
        img: '',
        title: '',
        aboutSpinner: '',
    };

    return (
        <div className='main-page__item main-page__item_spinnerCar'>
            <div className='main-page__item_spinner__info'>
                <h2 className='main-page__item_spinner__title' id={isActiveSpinner.title}>spinner</h2>
                <div className='about-spinner' id={isActiveSpinner.aboutSpinner}>
                    <p className='about-spinner__text about_last'>Spinner is the generic term for the fictional flying cars used in the film Blade Runner. A Spinner can be driven as a ground-based vehicle, take off vertically, hover, and cruise using jet propulsion much like the Vertical Take-Off and Landing (VTOL) aircraft currently in use today. They are used extensively by the police to patrol and survey the population, and it is clear that despite restrictions wealthy people can acquire spinner licenses. The vehicle was conceived and designed by Syd Mead and has been "replicated" in subsequent films such as The Fifth Element and the Star Wars prequel trilogy. These films have the popular vision of flying cars, and people use spinners like traditional cars; in Blade Runner, the flying cars substitute for helicopters and very light jets.</p>
                    <div className='main-page__item_spinner__a'>
                        <a href='#' className='main-page__item__a'>read more...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpinnerCarItem;

// className='spinner' id={isActiveSpinner}