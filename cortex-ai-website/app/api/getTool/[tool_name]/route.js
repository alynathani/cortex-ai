import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"
import { URLSearchParams } from "url";

export async function GET(request, { params }) {
    const toolName = params.tool_name
    try {
        const data = await prisma.tool.findMany({
            where: {
                name: toolName
            }
        })
        return NextResponse.json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}