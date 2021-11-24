import React from "react";
import blGun from '../../img/weapon/rev_back.jpg';
import railgun from '../../img/weapon/railgun.jpg';
import coilgun from '../../img/weapon/coilgun.jpg';
import WeaponsInfo from "./WeaponsInfo";


const KineticWeapon = () => {

    let texts = [['A kinetic weapon is a weapon that uses something tangible as a striking element, as opposed to an energy weapon. This includes realistic possible types of kinetic weapons, such as railgun and coilgun, which have become a frequent attribute of sci-fi settings'], ['A railgun consists of two parallel electrodes, called rails, connected to a source of powerful direct current. The mass to be accelerated is placed between them, closing the circuit. The Lorentz force acts on the rails and the projectile, causing them to repel each other.', 'Initially, it was assumed that the current is fed into the railgun, through constant electrical contact with the electrically conducting projectile between the electrodes, accelerates the projectile, and the projectile, of course, flies out. But then it turned out that the more current is supplied to the railgun, the more current is not spent on accelerating the projectile, but goes into the discharge between the electrodes, forming plasma.', 'For a long time they tried to reduce this, but in the end they decided that this is not a bug, but a feature, and now it is believed that the projectile in the railgun will be accelerated by the plasma that arises from this discharge. They turned a blind eye to the fact that this causes wild heating of the barrel, and in general, that it now looks like some version of a conventional gunpowder gun, rather than an electromagnetic gun. The real efficiency of such a thing turned out to be much lower than the theoretical sci-fi railgun, and there is no need to dream about the supposed universality of projectiles either.'], ['Unlike the railgun, the Gauss Cannon has a more complex system of projectile acceleration. To obtain sufficient velocity, the projectile must be attracted in turn by many coils standing along the barrel, for which in the process of firing it is necessary to switch them on and off at a strictly defined moment. This requires projectile position sensors and fast-acting keys for switching. On the one hand, this is much more complicated than simply connecting two rails to a battery. On the other hand, the current flows quietly through copper (or even superconducting) wires, without any special effects like plasma arc, and the projectile flies through the middle of the coils without touching them and practically without heating up.', 'Theoretically, the Gauss gun can shoot any objects (in a magnetic container), accelerate them without unnecessary overloads and use energy more efficiently. But in practice the Gauss gun is more difficult to make than a railgun, and it has no noticeable advantage in muzzle velocity over the usual firearm or rocket acceleration. In fiction, the Gaussian will differ from the railgun in its lower projectile velocity, but its greater mass, variety of ammunition, and dramatically greater barrel life: a howitzer or grenade launcher versus an armor-piercing hole puncher.', 'The GR-1 ANVIL is the worlds first handheld electromagnetic weapon from Arcflash Labs. The GR-1 is an electromagnetic Gauss gun.'] ];
    return (
        <div className='container weapons-page'>
            <h1 className='weapon-title'>kinetic weapons</h1>
            <WeaponsInfo img = {blGun} texts = {texts[0]} />
            <WeaponsInfo img = {railgun} texts = {texts[1]} />
            <WeaponsInfo img = {coilgun} texts = {texts[2]} />
            <h1 className='weapon-title'>energy weapons</h1>

        </div>
    );
};

export default KineticWeapon;