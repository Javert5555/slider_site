import React from 'react';
import MinorPageIntro from './minor_page_components/MinorPageIntro';
import MinorPageSection from './minor_page_components/MinorPageSection';
import MinorPageFooter from './minor_page_components/MinorPageFooter';
import Anchor from '../Anchor';
import '../../css/minor_page_components_styles/minor-pages.css';
import '../../css/minor_page_components_styles/minor-pages_footer.css';
// import '../../css/minor_page_components_styles/minor-pages.css';

import zkzm from '../../img/weapon/zkzm.jpg'
import blLaser from '../../img/weapon/bl_laser.jpg';
import phasr from '../../img/weapon/phasr.jpg';
import plasmagun from '../../img/weapon/plasmagun.jpg';

import blGun from '../../img/weapon/rev_back.jpg';
import railgun from '../../img/weapon/railgun.jpg';
import coilgun from '../../img/weapon/gr_anvil.jpg';

const energyWeapons = {
    'texts': [["Various weapons of the future are found in a huge number of sci-fi settings, and it is rare to find a work referring to some distant future even by 20 years, devoid of significantly different firearms from modern firearms. Almost always such weapons use some kind of compact energy source of the future and can spew plasma or laser beams.", "A directed energy weapon is a weapon that emits energy in a given direction without the use of wires, darts, or other conductors, to achieve a lethal or non-lethal effect."], ["A directional laser beam can char the upper layers of human skin, burn and/or ignite clothing or e.g. fuel tanks, etc. A prime example is the Chinese ZKZM-500 rifle. According to the ZKZM-500 designers company, a burn from the laser beam would be extremely painful, which would prevent the criminal from resistance if the laser beam hits him. The weapon is considered to be non-lethal as it does not burn through the body and does not damage vital organs.", "Laser weapons designed to directly destroy targets are quite problematic because of the large amount of energy required to destroy structural elements or disrupt the target's internal radioelectronic systems."], ["A simpler way is to create laser weapons, the main purpose of which is to dazzle the eyesight of enemy personnel, as well as the optical guidance or recognition systems of weapons and military equipment, which require much less energy to destroy.", "The blinding effect of laser weapons on enemy manpower is achieved through the red or green laser beam, which causes temporary dazzle and psychological effects, resulting in the inability to perform coordinated (conscious) actions, thereby reducing his fighting ability and preventing him from moving forward.", "An example of such a weapon is the PHASR. PHASR a non-lethal laser weapon developed by the U.S. Department of Defense."], ["The presumed principle of the plasmogun is that a charge consisting of ionized gas heated to a plasma state is accelerated by a linear electromagnetic field in the direction of the target. Upon hitting the target, the plasmoid charge, previously held by its own electromagnetic field, collapses (often explosively) and inflicts devastating damage. ", "The problem is that plasma is known to cool down and disperse outside the magnetic trap, and it is not clear how it can be launched as a beam, so there are no examples of really working plasmaguns."] ],
    'images': [blLaser, zkzm, phasr, plasmagun],
    'imgTitles': ['Blade runner`s laser', 'ZKZM-500', 'PHASR', 'Sсi-fi plasmagun'],
    'title': 'energy weapons',
};

const kineticWeapons = {
    'texts': [["A kinetic weapon is a weapon that uses something tangible as a striking element, as opposed to an energy weapon. This includes realistic possible types of kinetic weapons, such as railgun and coilgun, which have become a frequent attribute of sci-fi settings."], ["A railgun consists of two parallel electrodes, called rails, connected to a source of powerful direct current. The mass to be accelerated is placed between them, closing the circuit. The Lorentz force acts on the rails and the projectile, causing them to repel each other.", "Initially, it was assumed that the current is fed into the railgun, through constant electrical contact with the electrically conducting projectile between the electrodes, accelerates the projectile, and the projectile, of course, flies out. But then it turned out that the more current is supplied to the railgun, the more current is not spent on accelerating the projectile, but goes into the discharge between the electrodes, forming plasma.", "For a long time they tried to reduce this, but in the end they decided that this is not a bug, but a feature, and now it is believed that the projectile in the railgun will be accelerated by the plasma that arises from this discharge. They turned a blind eye to the fact that this causes wild heating of the barrel, and in general, that it now looks like some version of a conventional gunpowder gun, rather than an electromagnetic gun. The real efficiency of such a thing turned out to be much lower than the theoretical sci-fi railgun, and there is no need to dream about the supposed universality of projectiles either."], ["Unlike the railgun, the Gauss Cannon has a more complex system of projectile acceleration. To obtain sufficient velocity, the projectile must be attracted in turn by many coils standing along the barrel, for which in the process of firing it is necessary to switch them on and off at a strictly defined moment. This requires projectile position sensors and fast-acting keys for switching. On the one hand, this is much more complicated than simply connecting two rails to a battery. On the other hand, the current flows quietly through copper (or even superconducting) wires, without any special effects like plasma arc, and the projectile flies through the middle of the coils without touching them and practically without heating up.", "Theoretically, the Gauss gun can shoot any objects (in a magnetic container), accelerate them without unnecessary overloads and use energy more efficiently. But in practice the Gauss gun is more difficult to make than a railgun, and it has no noticeable advantage in muzzle velocity over the usual firearm or rocket acceleration. In fiction, the Gaussian will differ from the railgun in its lower projectile velocity, but its greater mass, variety of ammunition, and dramatically greater barrel life: a howitzer or grenade launcher versus an armor-piercing hole puncher.", "The GR-1 ANVIL is the worlds first handheld electromagnetic weapon from Arcflash Labs. The GR-1 is an electromagnetic Gauss gun."] ],
    'images': [blGun, railgun, coilgun],
    'imgTitles': ['Blade runner`s gun', 'Railgun', 'GR-1 ANVIL'],
    'title': 'kinetic weapons',
};

let minorPages = [energyWeapons, kineticWeapons];



const WeaponsPage = () => (
    <div className='minor-page'>
        <MinorPageIntro
            title = {'weapons'}
            typeIntro = {'minor-pages__intro_weapons'}
        />
        {minorPages.map((minorPage) => (
            <MinorPageSection
                {...minorPage}
                key={`minorPageSection_${minorPage.title.trim()}`}
            />
        ))}
        <MinorPageFooter />
        <Anchor />
    </div>
);

export default WeaponsPage;