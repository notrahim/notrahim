import React from 'react';
import { useState } from 'react';

const DropDown = (props) => {
    const [openBtn, setOpenBtn] = useState(false);

    const question = props.question
    const text = props.text

    if(!openBtn) {
        return (
            <div className="dropDownContainer">
                <button onClick={()=>setOpenBtn(!openBtn)} className="dropDown">
                    {question}
                    <img src="../img/SVG/1x/chevronbottom.png" alt="chevron bottom" />
                </button>
            </div>
        )
    } 

    return (
        <div className="dropDownContainer">
            <button onClick={()=>setOpenBtn(!openBtn)} className="dropDown">
                {question}
                <img src="../img/SVG/1x/chevrontop.png" alt="chevron rop" />
            </button>
            <p>{text}</p>
        </div>

    )

};

export default DropDown;