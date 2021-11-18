import React from "react";
import blGun from '../../img/weapon/rev_back.jpg';
import railgun from '../../img/weapon/railgun.jpg';

const KineticWeapon = () => (
    <div className='container kinetic-weapon'>
        <h1 className='weapon-title'>kinetic weapon</h1>
        <div className='kinetic-weapon__info'>
            <div className='kinetic-weapon__info__img-container'>
                <img className='kinetic-weapon__info__img' src={blGun} />
                <p className='kinetic-weapon__info__img-title'>Blade runners coilgun</p>
            </div>
            <div className='kinetic-weapon__info__text'>
                <p className='weapon-text'>A kinetic weapon is a weapon that uses something tangible as a striking element, as opposed to an energy weapon. This includes realistic possible types of kinetic weapons, such as railgun and coilgun, which have become a frequent attribute of sci-fi settings.</p>
                <p className='weapon-text'>A railgun consists of two parallel electrodes, called rails, connected to a source of powerful direct current. The mass to be accelerated is placed between them, closing the circuit. The Lorentz force acts on the rails and the projectile, causing them to repel each other. </p>
                <p className='weapon-text'>The Gauss gun, aka coilgun, is a variant of the kinetic weapon that accelerates a projectile made of ferromagnetic material by an electromagnetic field created by an electric current through coils. In simpler terms, it is powered by electricity and shoots iron. </p>
            </div>
        </div>
        <div className='kinetic-weapon__info'>
            <div className='kinetic-weapon__info__img-container'>
                <img className='kinetic-weapon__info__img' src={railgun} />
                <p className='kinetic-weapon__info__img-title'>Railgun</p>
            </div>
            <div className='kinetic-weapon__info__text'>
                <p className='weapon-text'>A kinetic weapon is a weapon that uses something tangible as a striking element, as opposed to an energy weapon. This includes realistic possible types of kinetic weapons, such as railgun and coilgun, which have become a frequent attribute of sci-fi settings.</p>
                <p className='weapon-text'>A railgun consists of two parallel electrodes, called rails, connected to a source of powerful direct current. The mass to be accelerated is placed between them, closing the circuit. The Lorentz force acts on the rails and the projectile, causing them to repel each other. </p>
                <p className='weapon-text'>The Gauss gun, aka coilgun, is a variant of the kinetic weapon that accelerates a projectile made of ferromagnetic material by an electromagnetic field created by an electric current through coils. In simpler terms, it is powered by electricity and shoots iron. </p>
            </div>
        </div>

    </div>
);

export default KineticWeapon;