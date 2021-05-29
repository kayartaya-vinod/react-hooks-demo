import React, { useState, useReducer, useRef, useEffect } from 'react';
const ADD_PERSON = 'ADD_PERSON';
const DELETE_PERSON = 'DELETE_PERSON';

const initialState = {
    people: [
        { id: 1, name: 'Vinod', city: 'Bangalore' },
        { id: 2, name: 'Shyam', city: 'Shivamogga' },
        { id: 3, name: 'Pranav', city: 'Melbourne' },
        { id: 4, name: 'Modi', city: 'Ahmedabad' },
    ],
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PERSON: {
            console.log(
                'ADD_PERSON action triggered in reducer',
                Math.random()
            );
            let people = [...state.people];
            let id = Math.max(...people.map((p) => p.id)) + 1;
            let person = action.payload;
            person.id = id;
            people.push(person);
            return { ...state, people };
        }
        case DELETE_PERSON: {
            let people = [...state.people];
            let index = people.findIndex((p) => p.id === action.payload);
            if (index !== -1) {
                people.splice(index, 1);
            }
            return { ...state, people };
        }
        default:
            return { ...state };
    }
};

export default function Example5() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        window.dispatch = dispatch;
    }, []);

    const [person, setPerson] = useState({ name: '', city: '' });
    const nameRef = useRef();

    const handleChange = ({ target }) => {
        let { name, value } = target;
        setPerson({ ...person, [name]: value });
        console.log(person);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, city } = person;
        console.log(person);
        dispatch({ type: ADD_PERSON, payload: { name, city } });
        setPerson({ name: '', city: '' });
        nameRef.current.focus();
    };
    return (
        <>
            <h1>Reducer Demo</h1>
            <hr />

            <div className='row'>
                <div className='col'>
                    <h3>List of names</h3>
                    <ul>
                        {state.people.map((p) => (
                            <div key={p.id}>
                                <li className='btn btn-link'>
                                    {p.name} lives in {p.city}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='col'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name' className='form-label'>
                                Name
                            </label>
                            <input
                                autoFocus
                                ref={nameRef}
                                onChange={handleChange}
                                value={person.name}
                                type='text'
                                name='name'
                                id='name'
                                className='form-control'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='city' className='form-label'>
                                City
                            </label>
                            <input
                                onChange={handleChange}
                                value={person.city}
                                type='text'
                                name='city'
                                id='city'
                                className='form-control'
                            />
                        </div>
                        <br />
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
