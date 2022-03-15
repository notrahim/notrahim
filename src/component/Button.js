import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    const value = props.value;
    const addClass = props.addClass;
    const link = props.link;

    return (
        <NavLink to={link} className={addClass !== undefined? addClass + " btnUn" : "btnUn"}>{value}</NavLink>
    );
};

export default Button;