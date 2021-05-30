import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

export default function TodoForm() {
    const [task, setTask] = useState('');
    const { addTodo } = useTodoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTodo(task);
        setTask('');
    };
    return (
        <div>
            <h3>Todo Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className='form-control'
                />
            </form>
        </div>
    );
}
