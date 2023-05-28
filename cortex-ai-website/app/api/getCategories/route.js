import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export async function GET(request, { params }) {
        const data = await prisma.category.findMany({})
        return NextResponse.json(data)
    
}