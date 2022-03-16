import React from 'react';
import ProgressLign from './component/ProgressLign';

const Formulaire = () => {
    return (
        <div className="globalFormContainer">
            <button className="returnBtn">
                <img src="./img/SVG/chevron-left-blue.png" alt="chevron right"/>
                retour
            </button>
            <div className="container">
                <h2>Vous souhaitez :</h2>
                <ProgressLign progress={60} />
            </div>
        </div>
    );
};

export default Formulaire;