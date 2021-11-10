import React from "react";
import { InView } from 'react-intersection-observer';
import WeaponIntro from "./WeaponIntro";
import KineticWeapon from "./KineticWeapon";
import '../../css/weapon_components_styles/weapon.css';


const WeaponPage = () => (
    <div className='weapon-page'>
        <WeaponIntro />
        <KineticWeapon />
    </div>
);

export default WeaponPage;

    // <InView>
    //     {({ inView, ref }) => {
    //         return (
    //             <div ref={ref}>
    //                 <Item isView={inView} />
    //             </div>
    //         );
    //     }}
    // </InView>