import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

const SelectDropDown = (props) => {
    
    /* It's a hook that allows us to use state in a functional component. */
    const [openBtn, setOpenBtn] = useState(false);

    const list = props.list;

    const addClass = props.addClass !== undefined ? props.addClass : null

    const [title, setTitle] = useState(props.title)

    const handleTitle = (el)=>{
        setTitle(el)
        setOpenBtn(false)
        props.callBack(true)
    }

    const bottom = ()=>{
        return(
            <div className="selectDropDown-bottom">
                <ul>
                    {list.map(el=>
                        <li key={el} onClick={()=>handleTitle(el)}>{el}</li>
                    )}
                </ul>
            </div>
        )
    }

    return (
        <button type="button" className={'selectDropDown ' + addClass}onClick={()=>setOpenBtn(!openBtn)}>
            <h4>{title}</h4>
            {!openBtn ? <FontAwesomeIcon icon={faChevronDown} />: <FontAwesomeIcon icon={faChevronUp} onClick={()=>setOpenBtn(false)}/>}
            {!openBtn ? null : bottom()}
        </button>
    );
};

export default SelectDropDown;