import React from 'react';

/**
 * It takes in a title and text as props, and returns a title and text
 * @param props - This is the object that contains all the props that were passed to the component.
 * @returns A React component that displays a title and text.
 */
const TitleAndText = (props) => {

    /* Assigning the value of the title prop to the title variable. */
    const title = props.title;

    /* Assigning the value of the text prop to the text variable. */
    const text = props.text;

    /* Returning a React component that displays a title and text. */
    return (
        <>
            <h1>{title}</h1>
                <p className="description">
                    {text}
                </p>
        </>
    );
};

export default TitleAndText;