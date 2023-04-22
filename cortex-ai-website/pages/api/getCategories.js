import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    res.status(200).json([{"id":1,"name":"Accounting"},{"id":2,"name":"Maths"},{"id":3,"name":"Essay Writing"},{"id":4,"name":"Programming"},{"id":5,"name":"Photo Generation"},{"id":6,"name":"Music Generation"}])
    
}

