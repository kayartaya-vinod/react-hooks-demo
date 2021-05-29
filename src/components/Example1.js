import React, { useState, useEffect } from 'react';

export default function Example1() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('executes once during component load');
        return () => {
            console.log('executes once during component unload');
        };
    }, []);

    useEffect(() => {
        console.log('executes once when the state changes. value is', value);
    }, [value]);

    const incr = () => setValue(value + 1);
    const decr = () => setValue(value - 1);

    return (
        <>
            <h1>React hooks demo</h1>
            <h2>useEffect</h2>
            <hr />
            <p>Value is {value}</p>
            <button className='btn btn-primary' onClick={incr}>
                Increment
            </button>
            <button className='btn btn-primary' onClick={decr}>
                Decrement
            </button>
        </>
    );
}
