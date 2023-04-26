import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export async function GET(request) {
    
    try{
        const data = await prisma.tool.findMany()
        return NextResponse.json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}