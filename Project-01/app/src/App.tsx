import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons/faStarHalfStroke';
import { faLocationPin, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
    return (
        <>
            <h1>WhatFont Am I?</h1>
            <FontAwesomeIcon icon={faLocationPin} />
            <FontAwesomeIcon icon={faStar} color='#1c1cfe' />
            <FontAwesomeIcon icon={faStarHalfStroke} color='orange' />
        </>
    );
}

export default App;
