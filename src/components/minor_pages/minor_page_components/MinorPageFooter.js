import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken, faFilm, faBook  } from '@fortawesome/free-solid-svg-icons';

const MinorPageFooter = () => (
    <footer className='minor-pages__footer'>
        <nav className='minor-pages__footer__nav'>
            <a rel="noreferrer" href='https://translated.turbopages.org/proxy_u/en-ru.ru.15a9a4ba-61b22192-00e19c6f-74722d776562/https/bladerunner.fandom.com/wiki/Blade_Runner_2049' target='_blank' className='minor-pages__footer__nav__link'>
                <FontAwesomeIcon icon={faHeartBroken}/>
            </a>
            <a rel="noreferrer" href='https://www.kinopoisk.ru/film/589290/' target='_blank' className='minor-pages__footer__nav__link'>
                <FontAwesomeIcon icon={faFilm}/>
            </a>
            <a rel="noreferrer" href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%87%D1%82%D0%B0%D1%8E%D1%82_%D0%BB%D0%B8_%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4%D1%8B_%D0%BE%D0%B1_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BE%D0%B2%D1%86%D0%B0%D1%85%3F' target='_blank' className='minor-pages__footer__nav__link'>
                <FontAwesomeIcon icon={faBook}/>
            </a>
        </nav>
    </footer>
);

export default MinorPageFooter;