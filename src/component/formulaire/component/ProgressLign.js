import React from 'react';

const ProgressLign = (props) => {
    const progress = props.progress
    return (
        <div className="progressLign">
            <div style={{width:progress+ "%"}} className="progressLignIn"></div>
        </div>
    );
};

export default ProgressLign;