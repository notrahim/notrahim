import React from 'react';

const ImageAndText = (props) => {
    const img = props.img;
    const alt= props.alt;
    const title = props.title;
    const text = props.text;
    const sens = props.sens;
    const addClass = props.addClass;

    if(sens === "left"){
        return (
            <div className={addClass != undefined ? addClass + " first specialisteLeft specialiste" : "specialisteLeft specialiste"}>
                <img src={img} alt={alt} />
                <div className="specialisteRightContainer">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className={addClass != undefined ? addClass + "first specialisteRight specialiste" : "specialisteRight specialiste"}>
                <div className="specialisteRightContainer">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <img src={img} alt={alt} />
            </div>
        );
    }

};

export default ImageAndText;