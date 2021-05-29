import React, { useState, useRef } from 'react';
import { useStore } from './NamesProvider';

export default function NameForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const firstnameRef = useRef('');
    const [, dispatch] = useStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstname) {
            return;
        }
        dispatch({ type: 'ADD_NAME', payload: { firstname, lastname } });
        setFirstname('');
        setLastname('');
        firstnameRef.current.focus();
    };

    return (
        <div>
            <h3>Name form:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    ref={firstnameRef}
                    type='text'
                    className='form-control'
                    placeholder='Firs tname'
                    onChange={(e) => {
                        setFirstname(e.target.value);
                    }}
                    value={firstname}
                />
                <input
                    type='text'
                    className='form-control'
                    placeholder='Last name'
                    onChange={(e) => {
                        setLastname(e.target.value);
                    }}
                    value={lastname}
                />
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    );
}
