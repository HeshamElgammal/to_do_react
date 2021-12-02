import React, { useState } from 'react';
import FormInput from './FormInput';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


function Todo({ toDos, CompliteToDo, RemoveToDo, updateItem }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = (value) => {
        updateItem(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <FormInput edit={edit} onSubmit={submitUpdate} />
    }
    return (
        toDos.map((todo, index) => (
            <div
                className={todo.isComplite ? 'todo-row complite' : 'todo-row'}
                key={index}
            >
                <div key={todo.id} onClick={() => CompliteToDo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine onClick={() => RemoveToDo(todo.id)}
                        className="delete-icon"
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: todo.id, value: todo.text })}
                        className="edit-icon" />
                </div>
            </div>
        ))
    );
}

export default Todo;