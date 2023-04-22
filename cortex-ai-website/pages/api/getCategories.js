import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    try{
        /*
        const data = await prisma.category.findMany()
        */

        const data = [{"id":1,"name":"Accounting"},{"id":2,"name":"Maths"},{"id":3,"name":"Essay Writing"},{"id":4,"name":"Programming"},{"id":5,"name":"Photo Generation"},{"id":6,"name":"Music Generation"}]
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
    
    
}

[{"id":1,"name":"Accounting"},{"id":2,"name":"Maths"},{"id":3,"name":"Essay Writing"},{"id":4,"name":"Programming"},{"id":5,"name":"Photo Generation"},{"id":6,"name":"Music Generation"}]