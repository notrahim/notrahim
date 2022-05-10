import React from 'react';

/**
 * It returns a div with a div inside it. The inner div has a width that is equal to the progress prop
 * @param props - The props object is passed to the component. It contains data that was passed to the
 * component from the parent component.
 * @returns A div with a className of progressLign and a div with a className of progressLignIn.
 */
const ProgressLign = (props) => {

    /* Getting the progress prop from the props object and assigning it to the progress variable. */
    const progress = props.progress

    return (
        <div className="progressLign">
            <div style={{width:progress+ "%"}} className="progressLignIn"></div>
        </div>
    );
};

export default ProgressLign;