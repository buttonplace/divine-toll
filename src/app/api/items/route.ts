import { NextResponse } from 'next/server'
const uri="https://jsonplaceholder.typicode.com/todos"

export async function GET(request: Request){
    const res = await fetch(uri);
    const data = await res.json()
 
    return NextResponse.json({ data })
}

