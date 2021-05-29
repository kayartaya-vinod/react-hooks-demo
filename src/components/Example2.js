import React, { useState, useRef } from 'react';
import PersonList from './PersonList';

export default function Example2() {
    const [person, setPerson] = useState({ firstname: '', email: '' });
    const [persons, setPersons] = useState([]);

    const firstnameRef = useRef();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPerson({ ...person, [name]: value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!person.firstname || !person.email) {
            return;
        }
        setPersons([...persons, { ...person }]);
        setPerson({ firstname: '', email: '' });
        firstnameRef.current.focus();
    };

    return (
        <>
            <hr />
            <h1>Controlled inputs</h1>
            <form
                className='form'
                onSubmit={handleSubmit}
                style={{ width: '40vw' }}
            >
                <div className='row mb-3'>
                    <div className='col-3'>
                        <label className='form-label' htmlFor='firstname'>
                            Name:
                        </label>
                    </div>
                    <div className='col-7'>
                        <input
                            value={person.firstname}
                            onChange={handleChange}
                            ref={firstnameRef}
                            type='text'
                            className='form-control'
                            name='firstname'
                            id='firstname'
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-3'>
                        <label className='form-label' htmlFor='email'>
                            Email:
                        </label>
                    </div>
                    <div className='col-7'>
                        <input
                            value={person.email}
                            onChange={handleChange}
                            type='email'
                            className='form-control'
                            name='email'
                            id='email'
                        />
                    </div>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>

            <PersonList {...{ persons }} />
        </>
    );
}
