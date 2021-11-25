import React from "react";
import { InView } from 'react-intersection-observer';
import zkzm from '../../img/weapon/zkzm.jpg'
import blLaser from '../../img/weapon/bl_laser.jpg';
import phasr from '../../img/weapon/phasr.jpg';
import plasmagun from '../../img/weapon/plasmagun.jpg';
import WeaponsInfo from "./WeaponsInfo";



const EnergyWeapons = () => {

    let texts = [["Various weapons of the future are found in a huge number of sci-fi settings, and it is rare to find a work referring to some distant future even by 20 years, devoid of significantly different firearms from modern firearms. Almost always such weapons use some kind of compact energy source of the future and can spew plasma or laser beams.", "A directed energy weapon is a weapon that emits energy in a given direction without the use of wires, darts, or other conductors, to achieve a lethal or non-lethal effect."], ["A directional laser beam can char the upper layers of human skin, burn and/or ignite clothing or e.g. fuel tanks, etc. A prime example is the Chinese ZKZM-500 rifle. According to the ZKZM-500 designers company, a burn from the laser beam would be extremely painful, which would prevent the criminal from resistance if the laser beam hits him. The weapon is considered to be non-lethal as it does not burn through the body and does not damage vital organs.", "Laser weapons designed to directly destroy targets are quite problematic because of the large amount of energy required to destroy structural elements or disrupt the target's internal radioelectronic systems."], ["A simpler way is to create laser weapons, the main purpose of which is to dazzle the eyesight of enemy personnel, as well as the optical guidance or recognition systems of weapons and military equipment, which require much less energy to destroy.", "The blinding effect of laser weapons on enemy manpower is achieved through the red or green laser beam, which causes temporary dazzle and psychological effects, resulting in the inability to perform coordinated (conscious) actions, thereby reducing his fighting ability and preventing him from moving forward.", "An example of such a weapon is the PHASR. PHASR a non-lethal laser weapon developed by the U.S. Department of Defense."], ["The presumed principle of the plasmogun is that a charge consisting of ionized gas heated to a plasma state is accelerated by a linear electromagnetic field in the direction of the target. Upon hitting the target, the plasmoid charge, previously held by its own electromagnetic field, collapses (often explosively) and inflicts devastating damage. ", "The problem is that plasma is known to cool down and disperse outside the magnetic trap, and it is not clear how it can be launched as a beam, so there are no examples of really working plasmaguns."] ];
    
    let images = [blLaser, zkzm, phasr, plasmagun];
    let imgTitles = ['Blade runner`s laser', 'ZKZM-500', 'PHASR', 'Sсi-fi plasmagun'];

    return (
        <div className='container weapons-page'>
            <h1 className='weapon-title'>energy weapons</h1>
            {texts.map((text, i) => (
                <InView key={imgTitles[i]}>
                    {({ inView, ref }) => {
                        return (
                            <div ref={ref}>
                                <WeaponsInfo img = {images[i]} imgTitle = {imgTitles[i]} texts = {text} isView={inView} />
                            </div>
                        );
                    }}
                </InView>
            ))}
            {/* <WeaponsInfo img = {blLaser} imgTitle = {'Blade runner`s laser'} texts = {texts[0]} />
            <WeaponsInfo img = {zkzm} imgTitle = {'ZKZM-500'} texts = {texts[1]} />
            <WeaponsInfo img = {phasr} imgTitle = {'PHASR'} texts = {texts[2]} />
            <WeaponsInfo img = {plasmagun} imgTitle = {'Sсi-fi plasmagun'} texts = {texts[3]} /> */}
        </div>
    );
};

export default EnergyWeapons;

    // <InView> <WeaponsInfo img = {images[i]} imgTitle = {imgTitles[i]} texts = {text} />
    //     {({ inView, ref }) => {
    //         return (
    //             <div ref={ref}>
    //                 <Item isView={inView} />
    //             </div>
    //         );
    //     }}
    // </InView>