import React from 'react';
import { useTodoContext } from './TodoContext';

export default function TodoList() {
    const { todos, toggleDone } = useTodoContext();
    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos &&
                    todos.map((t) => (
                        <li key={t.id}>
                            <button
                                onClick={() => toggleDone(t.id)}
                                className='btn btn-default'
                            >
                                {t.done ? <del>{t.task}</del> : <>{t.task}</>}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
