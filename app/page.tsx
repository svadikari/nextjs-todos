'use client'

import React, {useEffect, useState} from 'react'
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

const Page = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const resp = await fetch("/api/todos");
                if (!resp.ok) {
                    throw new Error('No Posts Found');
                }
                const data = await resp.json();
                setTodos(data);
            } finally {
                setLoading(false);
            }
        }
        fetchTodos().finally(() => setLoading(false));
    }, []);

    const addTodo = async (todoStr: string) => {
        try {
            const resp = await fetch("/api/todos", {
                method: "POST",
                body: JSON.stringify({
                    todo: todoStr,
                    completed: false,
                    userId: 5,
                })
            });
            if (!resp.ok) {
                throw new Error('No Posts Found');
            }
            const todo: Todo = await resp.json();
            setTodos([todo, ...todos]);
        } finally {
            setLoading(false);
        }
    }
    const toggleTodo = async (id: number) => {
        setLoading(true);
        const todo: Todo | undefined = todos?.find(todo => todo.id === id);
        if (todo) {
            const resp = await fetch(`/api/todos/${id.toString()}`, {
                method: "PUT",
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });
            if (!resp.ok) {
                throw new Error('No Todo Found');
            }
            setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
            setLoading(false);
        }
    };

    const deleteTodo = async (id: number) => {
        setLoading(true);

        const resp = await fetch(`/api/todos/${id.toString()}`, {
            method: "DELETE"
        });
        if (!resp.ok) {
            throw new Error('No Todo Found');
        }
        setTodos(todos.filter(todo => todo.id !== id));
        setLoading(false);

    };

    return (
        <div className="h-4/5 justify-content-center p-6">
            <AddTodo addTodo={addTodo}/>
            {loading && <p className="text-black">{loading}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}
export default Page
