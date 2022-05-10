import React from 'react';
import { useState } from 'react';

/**
 * The function is called Test. It has a state called test. The state is set to false. The function has
 * a button that when clicked, changes the state to true
 * @returns const Test = () => {
 *     const [test, setTest] = useState(false)
 */
const Test = () => {

    /* Setting the state of test to false. */
    const [test, setTest] = useState(false)

    /**
     * It sets the value of test to the opposite of what it was.
     */
    const initTest = () =>{
        setTest(!test);
        console.log(test);
    }

    /* Returning a button that when clicked, calls the function initTest. */
    return (
        <div>
            <button onClick={initTest}>click here</button>
        </div>
    );
};

export default Test;