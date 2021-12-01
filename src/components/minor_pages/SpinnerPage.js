import React from 'react';
import MinorPageIntro from './minor_page_components/MinorPageIntro';
import MinorPageSection from './minor_page_components/MinorPageSection';
import Anchor from '../Anchor';
import '../../css/minor_page_components_styles/minor-pages.css';

import ehang from '../../img/spinner/ehang.jpg';
import volocopter from '../../img/spinner/volocopter.jpg';

import osprey from '../../img/spinner/v22_osprey.jpg';
import liliumJet from '../../img/spinner/lilium_jet.jpg';

import vtol from '../../img/spinner/j2000.jpg';
import vtolBack from '../../img/spinner/j2000_back.jpg';

import kittyHawkCora from '../../img/spinner/kitty_hawk_cora.jpg';


const bearingScrewsOrFixedWingScrews = {
    'texts': [["Nowadays, the multirotor drone does not cause any more questions or problems. We know how to build it. It is not very efficient, so its range is limited to batteries. Since it has already been dealt with, drones are the first devices that can take off. They are pure multicopters, such as the Volocopter (with 18 rotors) and the eHang. There is another subcategory: Hoverbikes, which are even more like consumer drones in that they have only one seat, which is often located above the propellers. This includes Kitty Hawk's first vehicle, the 'Flyer'.", "It is much easier to make, so there are more mentions of it in the press. It can be seen as an extension of the multicopter to get something that can hold 60-120 kg of load and fly for 30 minutes. However, there is a limit, as the battery gets bigger (to carry more load and cover more distance), it gets heavier, thus reducing the allowable load and range while increasing the cost."], ["The biggest problem is that the multicopter is even worse than the helicopter in terms of efficiency. A design with a decent range usually has a hybrid electric drive.", "That's why most of the teams work on some kind of hybrids that take off like multicopters, but they have a wing and immediately after takeoff they (multicopters) turn into a regular airplane. The wing is not necessary for a normal takeoff, it does not have to be as big as on a normal airplane."] ],
    'images': [ehang, volocopter],
    'imgTitles': ['EHang', 'Volocopter'],
    'title': 'bearing screws or fixed wing screws',
};

const convertoplan = {
    'texts': [["The oldest design for twin rotor planes with a wing is the deflectable rotor. The large rotors point upward and can be deflected forward. The V22-Osprey is notorious for a similar design that caused fatal accidents."], ["However, the knowledge gained in building this design at Bell Helicopter led to the Nexus design, which used deflected enclosed propellers. Other designs mount the rotors on the wing and tilt the entire wing assembly. Lilium Jet puts them in the tail section and tilts them as well.", "Lilium Jet - many deflectable propellers. It claims a very high speed and range. The trick is to safely deflect the rotors on takeoff and landing. This is not easy. "] ],
    'images': [osprey, liliumJet],
    'imgTitles': ['V22-Osprey', 'Lilium Jet'],
    'title': 'convertoplan',
};

const fluidicPropulsionSystems = {
    'texts': [["Almost all flying car concepts have one thing in common: propellers or fans sticking out of the fuselage and pushing the aircraft in the direction in which they are pointing. However, the aircraft designers from Seattle came up with a unique propulsion system without rotating blades. The device is already at the prototype stage. Two 2-person versions of the VTOL are promised - a high-speed version that will reach 640 km/h and fly 640 km, and a long-range version with a range of almost 2 thousand km."], ["The Jetoptera engineers' idea resembles James Dyson's bladeless fan and is based on fluid dynamics: the device draws in air, multiplies it and produces a more powerful jet, while the reverse side creates a low-pressure area.", "Such a rig is very easy to rotate, making it easier to transition from vertical to horizontal flight of the VTOL. And, unlike almost all aircraft thrusters, it does not have to be round. The shape can be anything, but a long, elongated shape, like an airplane wing, is especially interesting."] ],
    'images': [vtol, vtolBack],
    'imgTitles': ['J-2000 VTOL', `J-2000's turbines`],
    'title': 'fluidic propulsion systems',
};

const pusherProp = {
    'texts': [["If you don't deflect the rotors, you can fly by adding an extra, more traditional propeller, usually in the back. This is the design of the Kitty Hawk Cora, and several other planes, including the Elroy cargo plane. The latter uses a gasoline engine to directly control the pusher propeller.", "The design is simple - no tilt, which will be a big problem if something goes wrong. This means that all rotors remain stationary for most of the flight, providing drag instead of thrust or lift."] ],
    'images': [kittyHawkCora],
    'imgTitles': ['Kitty Hawk Cora'],
    'title': 'Pusher prop',
};

let minorPages = [bearingScrewsOrFixedWingScrews, convertoplan, fluidicPropulsionSystems, pusherProp];


const WeaponsPage = () => (
    <div className='minor-page'>
        <MinorPageIntro
            title ={'spinner'}
            typeIntro = {'minor-pages__intro_spinners'}

        />

        {minorPages.map((minorPage) => (
            <MinorPageSection
                {...minorPage}
                key={`minorPageSection_${minorPage.title.trim()}`}
            />
        ))}

        {/* <MinorPageSection
            texts = {bearingScrewsOrFixedWingScrews.texts}
            images = {bearingScrewsOrFixedWingScrews.images}
            imgTitles = {bearingScrewsOrFixedWingScrews.imgTitles}
            title = {bearingScrewsOrFixedWingScrews.title}
        />
        <MinorPageSection
            texts = {convertoplan.texts}
            images = {convertoplan.images}
            imgTitles = {convertoplan.imgTitles}
            title = {convertoplan.title}
        />
        <MinorPageSection
            texts = {fluidicPropulsionSystems.texts}
            images = {fluidicPropulsionSystems.images}
            imgTitles = {fluidicPropulsionSystems.imgTitles}
            title = {fluidicPropulsionSystems.title}
        /> */}
        <Anchor />
    </div>
);

export default WeaponsPage;