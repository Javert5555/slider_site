import '../css/main-page__item.css';
import revolver from '../img/revolver_main.png';

const Weapon = ({ isView }) => {
    let isActiveWeapon = isView ? 'weapon_active' : '';
    let isActiveWeaponInfo = isView ? 'main-page__item_weapon__info_active' : '';

    return (
        <div className='main-page__item main-page__item_weapon'>
            <div className='main-page__item_weapon__info' id={isActiveWeaponInfo}>
                <h2 className='main-page__item_weapon__title'>Weapon</h2>
                <p className='about-weapon'>Rick Deckart's unusual weapon in the Ridley Scott blockbuster is constructed from parts of completely different designs - the double trigger and lower receiver come from a Steyr Mannlicher Model 222 SL hunting rifle. The grip and other parts are borrowed from the Charter Arms Bulldog 44 Special.</p>
                <p className='about-weapon'>The prop was re-created for Blade Runner 2049, as the original had been sold to a collector for $250,000. In all, four were made for 2049, three containing actual weaponry, and one made of rubber for action scenes.</p>
            </div>
            <img className='weapon' id={isActiveWeapon} src={revolver} alt='weapon' />
        </div>
    );

};

export default Weapon;