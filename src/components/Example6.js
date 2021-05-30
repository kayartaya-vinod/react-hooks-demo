import React from 'react';
import TodoForm from './example6/TodoForm';
import TodoList from './example6/TodoList';
import TodoContext from './example6/TodoContext';
import TodoSummary from './example6/TodoSummary';
import TodoHeader from './example6/TodoHeader';

export default function Example6() {
    return (
        <div>
            <h1>Example 6</h1>
            <TodoContext>
                <TodoHeader />
                <div className='row'>
                    <div className='col'>
                        <TodoForm />
                    </div>
                    <div className='col'>
                        <TodoList />
                        <TodoSummary />
                    </div>
                </div>
            </TodoContext>
        </div>
    );
}
