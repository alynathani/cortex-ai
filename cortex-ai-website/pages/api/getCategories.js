import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    try{
        const data = await prisma.category.findMany()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
    
    
}