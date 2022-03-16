import React from 'react';
import { useState } from 'react';

const DropDown = (props) => {
    const [openBtn, setOpenBtn] = useState(false);

    const question = props.question
    const text = props.text
    const classValue = props.class

    if(!openBtn) {
        return (
            <div className={classValue === undefined ? "dropDownContainer": "dropDownContainer " + classValue}>
                <div onClick={()=>setOpenBtn(!openBtn)} className="dropDown">
                    {question}
                    <img src="../img/SVG/1x/chevronBottom.png" alt="chevron bottom" />
                </div>
                <div className="lign"></div>
            </div>
        )
    } 

    return (
        <div className={classValue === undefined ? "dropDownContainer": "dropDownContainer " + classValue}>
            <div onClick={()=>setOpenBtn(!openBtn)} className="dropDown">
                {question}
                <img src="../img/SVG/1x/chevron.png" alt="chevron rop" />
            </div>
            <div className="lign"></div>
            <p>{text}</p>
        </div>

    )

};

export default DropDown;