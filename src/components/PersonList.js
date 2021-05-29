import React from 'react';

export default function PersonList({ persons }) {
    return (
        <>
            <ul className='list-group'>
                {persons.map((p, index) => (
                    <li key={index}>
                        {p.firstname} - {p.email}
                    </li>
                ))}
            </ul>
        </>
    );
}
