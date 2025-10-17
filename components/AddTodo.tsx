'use client'

import {FormEvent, useState} from "react";

const AddTodo = ({addTodo}: { addTodo: (todo: string) => void }) => {
    const [todo, setTodo] = useState('');
    const addTodoHandler = (e: FormEvent) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100">
            <form onSubmit={(e) => addTodoHandler(e)}>
                <label className="label-text sr-only" htmlFor="todoDetails">Todo</label>
                <input type="text" id="todoDetails" className="w-4/5" placeholder="New Todo" value={todo}
                       onChange={(e) => setTodo(e.target.value)}/>
                <button className="ml-3 border-1 border-double" type="submit">Add</button>
            </form>
        </div>
    )
}
export default AddTodo
