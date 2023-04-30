import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"

export async function GET(request, { params }) {
    const chosenCategory = params.category_name
    try {
        const data = await prisma.tool.findMany({
            where: {
                categoryName: chosenCategory
            }
        })
        return NextResponse.json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}