import React, { useState, useEffect, useRef } from 'react';

function FormInput(props) {
    const [input, setInput] = useState('')

    const useRefInput = useRef(null)
    useEffect(() => {
        useRefInput.current.focus()
    }, [])


    const handleInput = e => { setInput(e.target.value) }
    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
    }
    return (
        <form
            className="todo_form"
            onSubmit={handleSubmit}
        >
            {props.edit ? (<>
                <input
                    type='text'
                    placeholder="Update Data"
                    name='text'
                    value={input}
                    className='todo_input'
                    onChange={handleInput}
                    ref={useRefInput}
                />
                <button
                    onSubmit={handleSubmit}
                    className='todo_buttom'
                >Add TO Do</button>

            </>) : (<>
                <input
                    type='text'
                    placeholder="Add Data"
                    name='text'
                    value={input}
                    className='todo_input'
                    onChange={handleInput}
                    ref={useRefInput}
                />
                <button
                    onSubmit={handleSubmit}
                    className='todo_buttom'
                >Add TO Do</button>

            </>)}

        </form>
    );
}

export default FormInput;