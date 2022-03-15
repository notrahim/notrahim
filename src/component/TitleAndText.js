import React from 'react';

const TitleAndText = (props) => {
    const title = props.title;
    const text = props.text;

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