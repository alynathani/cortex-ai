import BrowseSection from "./components/BrowseSection"
import prisma from "../../lib/prisma";
import { PrismaClient } from "@prisma/client";

export const metadata = {
  title: 'Cortex AI - Browse'
}

type categoryListProps = {
  id: number,
  name: string
}[]

/*
async function getCategories():Promise<categoryListProps> {
  const res = await prisma.category.findMany()
  if (!res.ok) {
      console.log(res);
  }
  return res.json()
}
*/


export default async function Home() {
  const categoryList = await prisma.category.findMany()
  console.log("Category Data:");
  console.log(categoryList);
  
  return (
    
    <div style={{padding: "50px"}}>
    <BrowseSection categoryList={categoryList} />
    </div>
  )
}



