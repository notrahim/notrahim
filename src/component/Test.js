import React from 'react';
import { useState } from 'react';

const Test = () => {
    const [test, setTest] = useState(false)

    const initTest = () =>{
        setTest(!test);
        console.log(test);
    }

    return (
        <div>
            <button onClick={initTest}>click here</button>
        </div>
    );
};

export default Test;