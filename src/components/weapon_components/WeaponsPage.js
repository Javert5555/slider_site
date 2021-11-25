import React from 'react';
import WeaponsIntro from './WeaponsIntro';
import KineticWeapons from './KineticWeapons';
import EnergyWeapons from './EnergyWeapnos';
import Anchor from '../Anchor';
import '../../css/weapon_components_styles/weapon.css';


const WeaponsPage = () => (
    <div className='weapon-page'>
        <WeaponsIntro />
        <KineticWeapons />
        <EnergyWeapons />
        <Anchor />
    </div>
);

export default WeaponsPage;

    // <InView>
    //     {({ inView, ref }) => {
    //         return (
    //             <div ref={ref}>
    //                 <Item isView={inView} />
    //             </div>
    //         );
    //     }}
    // </InView>