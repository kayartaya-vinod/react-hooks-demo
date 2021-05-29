import React, { useRef, useState } from 'react';
import PersonList from './PersonList';

export default function Example3() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const [persons, setPersons] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = nameRef.current.value;
        const email = emailRef.current.value;

        setPersons([...persons, { firstname, email }]);
        nameRef.current.value = '';
        emailRef.current.value = '';
        nameRef.current.focus();
    };

    return (
        <div>
            <hr />
            <h1>Uncontrolled inputs</h1>
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
                            ref={nameRef}
                            type='text'
                            className='form-control'
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
                            ref={emailRef}
                            type='email'
                            className='form-control'
                            id='email'
                        />
                    </div>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>

            <PersonList {...{ persons }} />
        </div>
    );
}
