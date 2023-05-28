import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"
import { URLSearchParams } from "url";

export async function GET(request) {
    
    try {
        const data = await prisma.category.findMany()
        return NextResponse.json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}