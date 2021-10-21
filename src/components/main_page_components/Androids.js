import '../../css/mp_components_styles/main-page__item.css';
// import '../../css/mp_components_styles/spinner-item.css';

// import andrid from '../../img/new_car2.png';

const Androids = ({ isView }) => {
    let isActiveAndroids = isView ? 'androids_active' : '';
    let isActiveAndroidsInfo = isView ? 'main-page__item_androids__info_active' : '';

    return (
        <div className='main-page__item main-page__item_androids'>
            Androids
        </div>
    );
};

export default Androids;