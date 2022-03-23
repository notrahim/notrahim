import React from 'react';

const Card = (props) => {
    const img = props.img;
    const title = props.title;

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