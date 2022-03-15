import React from 'react';

const ImageAndText = (props) => {
    const img = props.img;
    const alt= props.alt;
    const title = props.title;
    const text = props.text;
    return (
        <>
            <img src={img} alt={alt} />
            <div className="specialisteRightContainer">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </>
    );
};

export default ImageAndText;