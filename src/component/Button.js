import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * It takes in a value, an optional addClass, and an optional link, and returns a NavLink with the
 * value, addClass, and link
 * @param props - This is the object that contains all the properties that are passed to the component.
 * @returns A NavLink component with the value of the props.value, the props.addClass, and the
 * props.link.
 */
const Button = (props) => {

    /* Assigning the value of the props.value to the variable value. */
    const value = props.value;

    /* Assigning the value of the props.addClass to the variable addClass. */
    const addClass = props.addClass;

    /* Assigning the value of the props.link to the variable link. */
    const link = props.link;

    // console.log(link);

    /* Returning a NavLink component with the value of the props.value, the props.addClass, and the
     * props.link. */
    return (
        <NavLink to={link} className={addClass !== undefined? addClass + " btnUn" : "btnUn"}>{value}</NavLink>
    );
};

export default Button;