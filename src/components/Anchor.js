import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Anchor = () => (
    <div>
        <a href='#header' className='anchor'>
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
    </div>
);

export default Anchor;