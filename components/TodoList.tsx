'use client'
import Todo from "@/components/Todo";

const TodoList = ({todos, toggleTodo, deleteTodo}: {
    todos: Todo[],
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}) => {

    console.log("All todos", todos);

    return (
        <>
            <section id="features" className="mt-24 px-8 md:px-20">
                {/*<div*/}
                {/*    className="grid dark:bg-slate-800 scroll-auto shadow-2xl p-6 rounded-lg max-h-[80vh] overflow-y-auto">*/}
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                        Simple & Clean Task Management
                    </h3>
                    {todos.length === 0 && <div
                        className="max-w-3xl mx-auto w-20 h-20 border-10 border-t-blue-500 border-gray-300 rounded-full animate-spin"
                    ></div>}
                    <ul className="space-y-4">
                        {todos.length > 0 && todos.map((todo: Todo) => <Todo key={todo.id} todo={todo}
                                                                             toggleTodo={toggleTodo}
                                                                             deleteTodo={deleteTodo}/>)}
                    </ul>
                </div>
            </section>
        </>

    )
}
export default TodoList;