import { Link } from 'react-router-dom';
import '../../css/mp_components_styles/main-page__item.css';
import '../../css/mp_components_styles/weapon-item.css';

const WeaponItem = ({ isView }) => {
    let isActiveWeapon = isView ? {
        img: 'weapon_active',
        title: 'main-page__item_weapon__title_active',
        aboutWeapon: 'about-weapon_active',
    } : {
        img: '',
        title: '',
        aboutWeapon: '',
    }

    return (
        <div className='main-page__item main-page__item_weapon'>
            <div className='main-page__item_weapon__info' id={isActiveWeapon.info}>
                <h2 className='main-page__item_weapon__title' id={isActiveWeapon.title}>Weapons</h2>
                <div className='about-weapon' id={isActiveWeapon.aboutWeapon}>
                    {/* <p className='about-weapon__text'>Rick Deckart's unusual weapon in the Ridley Scott blockbuster is constructed from parts of completely different designs - the double trigger and lower receiver come from a Steyr Mannlicher Model 222 SL hunting rifle. The grip and other parts are borrowed from the Charter Arms Bulldog 44 Special.</p>
                    <p className='about-weapon__text about-weapon__text_last'>The prop was re-created for Blade Runner 2049, as the original had been sold to a collector for $250,000. In all, four were made for 2049, three containing actual weaponry, and one made of rubber for action scenes.</p> */}
                    <p className='about-weapon__text'>In their films in the Blade Runner universe, Reedley Scott and Denis Villeneuve, show a small number of future weapons that are, for the most part, different from those of our time. Basically these are all types of kinetic and energy weapons.</p>
                    <p className='about-weapon__text about-weapon__text_last'>Such weapons are estimated to become an integral part of the armament of the troops of the most developed countries in the near future.</p>
                    <Link to='/weapon' className='main-page__item__a main-page__item__a_weapon'>read more...</Link>
                </div>
            </div>
            {/* <img className='weapon' id={isActiveWeapon.img} src={revolver} alt='weapon' /> */}
        </div>
    );

};

export default WeaponItem;