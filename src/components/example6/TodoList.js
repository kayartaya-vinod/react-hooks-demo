import React from 'react';
import { useTodoContext } from './TodoContext';

export default function TodoList() {
    const { todos, toggleDone, deleteTodo } = useTodoContext();
    return (
        <div>
            <h3>Todo List</h3>
            <p>
                Click on a task to mark is DONE (or vice versa) and double-click
                to remove a task
            </p>
            <ul>
                {todos &&
                    todos.map((t) => (
                        <li key={t.id}>
                            <button
                                onClick={() => toggleDone(t.id)}
                                onDoubleClick={() => deleteTodo(t.id)}
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
