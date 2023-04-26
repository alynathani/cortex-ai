import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"
import { URLSearchParams } from "url";

export async function GET(request, { params }) {
    const chosenCategory = params.category_name
    console.log(chosenCategory);
    try{
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