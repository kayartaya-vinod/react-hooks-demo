import React from 'react';
import { useTodoContext } from './TodoContext';

// since we are not using useTodContext() in this component, we don't have access to anything from TodoContext
export default function TodoHeader() {
    return (
        <div>
            <h2>
                Todo app - example of state management using useContext() hook
            </h2>
            <hr />
        </div>
    );
}
