import { Link } from 'react-router-dom';
import '../../css/mp_components_styles/main-page__item.css';
import '../../css/mp_components_styles/androids-item.css';
import '../../css/mp_components_styles/spinner-item.css';


// import andrid from '../../img/new_car2.png';

const AndroidsItem = ({ isView }) => {
    let isActiveAndroid = isView ? {
        img: 'android_active',
        title: 'main-page__item_android__title_active',
        aboutAndroid: 'about-android_active',
    } : {
        img: '',
        title: '',
        aboutAndroid: '',
    };

    return (
        <div className='main-page__item main-page__item_android'>
            <div className='main-page__item_android__info'>
                <h2 className='main-page__item_android__title' id={isActiveAndroid.title}>androids</h2>
                <div className='about-android' id={isActiveAndroid.aboutAndroid}>
                    <p className='about-android__text about_last'>Androids, colloquially referred to as andys, were synthetic beings designed for slave labor in the colonization program. Android models included the Synthetic Freedom Fighter, McMillan's Y-4, the Grozzi Corporation's W-4, Sudermann's T-14, and the Rosen Association's highly-intelligent Nexus-6. Following the manufacture of the T-14, the Pavlov Institute developed the Voigt-Kampff test to distinguish androids from humans.</p>
                    
                    <p className='red-line'></p>
                    <div className='main-page__item_android__a'>
                        <Link to='/androids' className='main-page__item__a'>read more...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AndroidsItem;