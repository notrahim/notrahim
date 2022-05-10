import React from 'react';

/**
 * The Card function takes in two props, img and title, and returns a div with a pointExt class, a div
 * with a pointInt class, an image with the src and alt attributes set to the img prop, and a h4 tag
 * with the title prop
 * @param props - This is the object that contains all the properties that are passed to the component.
 * @returns A React component.
 */
const Card = (props) => {
    
    /* Setting the img variable to the img property of the props object. */
    const img = props.img;
    
    /* Setting the title variable to the title property of the props object. */
    const title = props.title;

    /* It's a function that returns a JSX element. */
    return (
        <>
            <div className="pointExt">
                <div className="pointInt"></div>
            </div>
            <img src={"./img/SVG/"+img} alt={img}/> 
            <h4>{title}</h4>
        </>
    );
};

export default Card;