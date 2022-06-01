import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

//TODO changer l'image du dropdown par fontawesome

const DropDown = (props) => {

    /* It's destructuring the props. */
    const question = props.question
    
    /* It's destructuring the props. */
    const text = props.text
    
    /* It's destructuring the props. */
    const classValue = props.class

    const callback = props.callback;

    const showReturn = props.return;

    const handleclick = ()=>{
        callback(!showReturn)
        props.arg()
    }

    /* It's a ternary operator. It's a conditional operator that assigns a value to a variable based on
    some condition. */
    if(!showReturn) {
        return (
            <div className={classValue === undefined ? "dropDownContainer": "dropDownContainer " + classValue}>
                <div onClick={handleclick} className="dropDown">
                    <p>{question}</p>
                    <img src="../img/SVG/1x/chevronBottom.png" alt="chevron bottom" />
                </div>
                <div className="lign"></div>
            </div>
        )
    } 

    /* It's a ternary operator. It's a conditional operator that assigns a value to a variable based on
        some condition. */
    return (
        <div className={classValue === undefined ? "dropDownContainer": "dropDownContainer " + classValue}>
            <div onClick={handleclick} className="dropDown">
                    <p>{question}</p>
                <img src="../img/SVG/1x/chevron.png" alt="chevron top" className='top' />
            </div>
            <div className="lign"></div>
            <p className='text'>{text}</p>
        </div>

    )
};

export default DropDown;