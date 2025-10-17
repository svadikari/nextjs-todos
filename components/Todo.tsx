'use client'

import Image from "next/image";

const Todo = ({todo, toggleTodo, deleteTodo}: { todo: Todo , toggleTodo:(id: number) => void, deleteTodo:(id: number) => void}) => {

    return (
        <li
            className="flex items-center justify-between bg-gray-50 rounded-md p-3 hover:bg-gray-100 hover:scale-102 transition-transform duration-300"
        >
            <span className="flex items-center space-x-3">
              <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  id={todo.id?.toString()} checked={todo.completed} onChange={() => toggleTodo(todo.id!)}
              />
              <label htmlFor={todo.id?.toString()} className={`${todo.completed? 'line-through' : ''}`}>{todo.todo}</label>
            </span>
            <Image src="/Trash.svg" width="15" height="15" alt="Delete" onClick={()=> deleteTodo(todo.id!)}/>
        </li>
    )
}

export default Todo
