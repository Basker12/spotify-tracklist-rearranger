import React from 'react';
import ToDo from './ToDoComp';

export default function ToDoList({ todos }) {
    return (
        todos.map( todo => {
            return <ToDo key={todo.id} todo={todo} />
        })
    )
}