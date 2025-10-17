'use client'

import Image from "next/image";

const Todo = ({todo, toggleTodo, deleteTodo}: { todo: Todo , toggleTodo:(id: number) => void, deleteTodo:(id: number) => void}) => {

    return (
        <><li
            className="flex items-center justify-between bg-gray-50 rounded-md p-3 hover:bg-gray-100"
        >
            <span className="flex items-center space-x-3">
              <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  id={todo.id?.toString()} checked={todo.completed} onChange={() => toggleTodo(todo.id!)}
              />
              <span className={`${todo.completed? 'line-through' : ''}`}>{todo.todo}</span>
            </span>
            <Image src="/Trash.svg" width="15" height="15" alt="Delete" onClick={()=> deleteTodo(todo.id!)}/>
        </li>
        {/*<div className="todo-div">*/}
        {/*    <div className="w-64 flex-1">*/}
        {/*    <input type="checkbox" className="form-checkbox h-5 w-5" id={todo.id?.toString()} checked={todo.completed} onChange={() => toggleTodo(todo.id!)}/>*/}
        {/*    <label className={`pl-2 ${todo.completed? 'line-through' : ''}`} htmlFor={todo.id?.toString()}>{todo.todo}</label>*/}
        {/*    </div>*/}
        {/*    <div className="w-14 flex-none">*/}
        {/*        <Image src="/Trash.svg" width="15" height="15" alt="Delete" onClick={()=> deleteTodo(todo.id!)}/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </>
    )
}

export default Todo
