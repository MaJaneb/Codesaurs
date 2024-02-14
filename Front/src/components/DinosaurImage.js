// DinosaurImage.js
import React from 'react';
import mainDinoImage from '../assets/images/mainDino.png';

const DinosaurImage = () => {
    return (
        <img className="mainDino" src={mainDinoImage} alt="Dinosaur" />
    );
}

export default DinosaurImage;
