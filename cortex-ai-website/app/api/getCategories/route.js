import { NextResponse } from "next/server"

export async function GET(request) {
    /*
    try{
        const data = await prisma.category.findMany()
        return NextResponse.json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
    */

    return new Response('Hello!')
}