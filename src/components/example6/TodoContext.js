import { createContext, useContext, useState } from 'react';

export const TodoStore = createContext();
export const useTodoContext = () => useContext(TodoStore);

export default function TodoContext({ children }) {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Get milk', done: true },
        { id: 2, task: 'Take bath', done: true },
        { id: 3, task: 'Do workout', done: false },
    ]);

    const addTodo = (task) => {
        const id = Math.max(...todos.map((t) => t.id)) + 1;
        const newTodos = [...todos, { id, task, done: false }];
        console.log(todos);
        console.log(newTodos);

        setTodos(newTodos);
    };

    const toggleDone = (id) => {
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            todo.done = !todo.done;
            setTodos([...todos]);
        }
    };

    const deleteTodo = (id) => {
        const index = todos.findIndex((t) => t.id === id);
        if (index !== -1) {
            todos.splice(index, 1);
            setTodos([...todos]);
        }
    };

    return (
        <TodoStore.Provider value={{ todos, addTodo, toggleDone, deleteTodo }}>
            {children}
        </TodoStore.Provider>
    );
}
