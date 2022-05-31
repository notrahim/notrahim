import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

//TODO changer l'image du dropdown par fontawesome

const DropDown = (props) => {
    
    /* It's a hook that allows us to use state in a functional component. */
    const [openBtn, setOpenBtn] = useState(false);

    /* It's destructuring the props. */
    const question = props.question
    
    /* It's destructuring the props. */
    const text = props.text
    
    /* It's destructuring the props. */
    const classValue = props.class

    /* It's a ternary operator. It's a conditional operator that assigns a value to a variable based on
    some condition. */
    if(!openBtn) {
        return (
            <div className={classValue === undefined ? "dropDownContainer": "dropDownContainer " + classValue}>
                <div onClick={()=>setOpenBtn(!openBtn)} className="dropDown">
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
            <div onClick={()=>setOpenBtn(!openBtn)} className="dropDown">
                    <p>{question}</p>
                <img src="../img/SVG/1x/chevron.png" alt="chevron top" className='top' />
            </div>
            <div className="lign"></div>
            <p className='text'>{text}</p>
        </div>

    )
};

export default DropDown;