import React from 'react';
import { useTodoContext } from './TodoContext';

export default function TodoSummary() {
    const { todos } = useTodoContext();
    return (
        <>
            <p>There are {todos.length} tasks</p>
        </>
    );
}
