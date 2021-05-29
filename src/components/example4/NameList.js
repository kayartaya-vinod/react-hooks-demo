import React from 'react';
import { useStore } from './NamesProvider';

export default function NameList({ children }) {
    const [state, dispatch] = useStore();

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_NAME', payload: id });
    };

    return (
        <div>
            <h3>List of names</h3>
            <h5 className='text-danger'>(Click a name to delete)</h5>
            <ul>
                {state.names.map((n) => (
                    <div key={n.id}>
                        <li
                            onClick={() => handleDelete(n.id)}
                            className='btn btn-link'
                        >
                            {n.firstname} {n.lastname}
                        </li>
                    </div>
                ))}
            </ul>
            {children}
        </div>
    );
}
