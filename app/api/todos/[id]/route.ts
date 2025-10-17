import {NextRequest, NextResponse} from "next/server";

type Props = Promise<{ id: string }>;

export async function PUT(request: Request, {params}: { params: Props }) {
    const {id} = await params;
    const resp = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(request.json()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(!resp.ok) {
        throw new Error('Invalid Request')
    }
    const todo = await resp.json();
    return NextResponse.json(todo);
}
export async function DELETE(request: NextRequest,  {params}: {params: Props}) {
    const {id} = await params;
    const resp = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(!resp.ok) {
        throw new Error('Invalid Request')
    }
    return NextResponse.json(await resp.json());
}