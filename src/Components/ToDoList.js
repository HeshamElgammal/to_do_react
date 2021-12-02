import React, { useState } from 'react';
import FormInput from './FormInput';
import Todo from './todo';

function ToDoList() {
    const [toDos, setToDos] = useState([])
    const addToDo = (toDo) => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }
        const newToDos = [toDo, ...toDos]
        setToDos(newToDos)
        console.log(toDo, [...toDos])
    }
    const CompliteToDo = id => {
        const updateItem = toDos.map(todo => {
            if (todo.id === id) {
                todo.isComplite = !todo.isComplite
            }
            return todo;
        })
        setToDos(updateItem)
    }
    const updateItem = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setToDos(prev => prev.map(item => (item.id == id ? newValue : item)))
    }
    const removeItem = id => {
        const removeArr = [...toDos].filter(todo => todo.id != id)
        setToDos(removeArr)
    }
    return (
        <div>
            <h1>What's the plan for today ?</h1>
            <FormInput onSubmit={addToDo} />
            <Todo toDos={toDos} CompliteToDo={CompliteToDo} RemoveToDo={removeItem} 
            updateItem={updateItem}
            />
        </div>
    );
}

export default ToDoList;