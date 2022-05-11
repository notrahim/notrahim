import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

const SelectDropDown = (props) => {
    
    /* It's a hook that allows us to use state in a functional component. */
    const [openBtn, setOpenBtn] = useState(false);

    const list = props.list;
    
    const title = list[0];

    const bottom = ()=>{
        return(
            <div className="selectDropDown-bottom">
                <ul>
                    {list.map(el=>
                        <li key={el}>{el}</li>
                    )}
                </ul>
            </div>
        )
    }

    return (
        <div className='selectDropDown'>
            <h4>{title}</h4>
            {!openBtn ? <FontAwesomeIcon icon={faChevronDown} onClick={()=>setOpenBtn(true)}/>: <FontAwesomeIcon icon={faChevronUp} onClick={()=>setOpenBtn(false)}/>}
            {openBtn ? null : bottom()}
        </div>
    );
};

export default SelectDropDown;