import {NextResponse} from "next/server";

export async function GET() {
    const resp = await fetch('https://dummyjson.com/todos')
    if(!resp.ok) {
        throw new Error('Not Found')
    }
    const todos: Todo[] = await resp.json().then(data => data.todos);
    return NextResponse.json(todos.sort((a, b) => (b.id! - a.id!)));
}

export async function POST(request: Request) {
    const todoBody = await request.json();
    const resp = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        body: JSON.stringify(todoBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(!resp.ok) {
        console.error(resp.statusText);
    }
    const todo = await resp.json();
    return NextResponse.json(todo);
}