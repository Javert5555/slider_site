import React from 'react';
import MinorPageIntro from './minor_page_components/MinorPageIntro';
import MinorPageSection from './minor_page_components/MinorPageSection';
import MinorPageFooter from './minor_page_components/MinorPageFooter';

import Anchor from '../Anchor';
import '../../css/minor_page_components_styles/minor-pages.css';

import sergioCanavero from '../../img/androids/sergio_canavero.jpg';

import bioengHeart from '../../img/androids/heart.jpg';
import syntHeart from '../../img/androids/synt_heart.jpg';

import argusImplant from '../../img/androids/argus_implant.jpg';
import argus from '../../img/androids/argus.jpg';



const headTransplantation = {
    'texts': [["The replicants (androids) in Blade Runner are assembled from parts, like machines. Synthetic organs are placed in artificial bodies, synthetic brains in artificial skulls. In reality, this kind of assembly is not yet possible. Although there are already some developments.", "For example, Italian neurosurgeon Sergio Canavero said that he and a group of Chinese researchers had successfully transplanted the head of one rat into the body belonging to another rat. Now the surgeon plans to repeat the experience with a human head.", "However, he never succeeded in connecting the nerves of the head to the nervous system of the body. In fact, the body in this case acts only as a biological life-support apparatus. It breathes, it pumps blood. The blood washes over the brain, but the signals of the brain are not transmitted to the body, and the signals of the body do not go to the brain. Of course, the patient is completely paralyzed for the rest of his life.", "If humanity does not learn how to reattach damaged nerves, the idea of synthetic bodies can be forgotten. An alternative would be a system that captures brain signals and transmits them to an artificial avatar - virtual or robotic."] ],
    'images': [sergioCanavero],
    'imgTitles': ['Sergio Canavero'],
    'title': 'head transplantation',
};

const syntheticOrgans = {
    'texts': [["Using stem cells, scientists are able to grow hearts, kidneys, and other organs. But they are used exclusively for research purposes - to better understand how an organ functions or develops. No organ grown in this way is yet suitable for transplantation into a living person."], ["When it comes to organs made of synthetic materials, there has been some progress. For example, artificial hearts have been installed for decades, and recently scientists have been experimenting with bone fragments printed on a 3D printer.", "However, he never succeeded in connecting the nerves of the head to the nervous system of the body. In fact, the body in this case acts only as a biological life-support apparatus. It breathes, it pumps blood. The blood washes over the brain, but the signals of the brain are not transmitted to the body, and the signals of the body do not go to the brain. Of course, the patient is completely paralyzed for the rest of his life."] ],
    'images': [bioengHeart, syntHeart],
    'imgTitles': ['The heart grown from stem cells', 'Artificial synthetic heart'],
    'title': 'synthetic organs',
};

const bionicEyes = {
    'texts': [["Using stem cells, scientists are able to grow hearts, kidneys, and other organs. But they are used exclusively for research purposes - to better understand how an organ functions or develops. No organ grown in this way is yet suitable for transplantation into a living person."], ["The device consists of two main elements - the retinal implant itself and the external module. The module is a camera built into the glasses and a small graphics processor. The camera transmits a real-time signal to the processor, which processes it and transmits it wirelessly to the implant."] ],
    'images': [argus, argusImplant],
    'imgTitles': ['Argus external module', 'Argus implant'],
    'title': 'bionic eyes',
};

let minorPages = [headTransplantation, syntheticOrgans, bionicEyes];


const AndroidsPage = () => (
    <div className='minor-page'>
        <MinorPageIntro
            title ={'androids'}
            typeIntro = {'minor-pages__intro_androids'}

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

export default AndroidsPage;

// No matter how fantastic modern technology may seem to us, humanity has not yet advanced far enough. At the moment, no scientist in the world can assemble a thinking artificial being, be it an intelligent robot or a synthetic human being. And by 2019, the year in which the events of the first Blade Runner movie take place, that probably won't change.

// As for 2049, it's hard to predict anything. For example, futurologist Ray Kurzweil believes that by 2045 we will reach the technological singularity, after which anything will be possible. It is true that with each passing year, this optimistic prognosis is becoming less and less believable. After all, humanity is much more willing to spend money not on science, but on the development of the next iPhones with emoticons in the form of animated excrement. 