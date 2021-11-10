import React from "react";
import KinWeap from '../../img/weapon/rev_back.jpg';

const KineticWeapon = () => (
    <div className='kinetic-weapon'>
        <h1 className='kinetic-weapon__title'>kinetic weapon</h1>
        <div className='kinetic-weapon__info'>
            <img className='kinetic-weapon__info__img' src={KinWeap} />
            <div className=''>A kinetic weapon is a weapon that uses something tangible as a striking element, as opposed to an energy weapon. This includes realistic possible types of kinetic weapons, which have become a frequent attribute of sci-fi settings.</div>
        </div>

    </div>
);

export default KineticWeapon;