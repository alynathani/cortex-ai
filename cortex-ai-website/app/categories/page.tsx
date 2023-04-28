import { get } from "http"
import CategoriesSection from "@/components/CategoriesSection"

export const metadata = {
  title: 'Cortex AI - Browse'
}

type categoryListProps = {
  id: number,
  name: string
}[]

export const dynamic = 'force-dynamic'

async function getCategories():Promise<categoryListProps> {
  const res = await fetch(`${process.env.BASE_URL}/api/getCategories`, { cache: 'no-store'})
  if (!res.ok) {
      console.log(res);
  }
  return res.json()
}



export default async function Home() {
  
  // const categoryList = [{"id":1,"name":"Accounting"},{"id":2,"name":"Maths"},{"id":3,"name":"Essay Writing"},{"id":4,"name":"Programming"},{"id":5,"name":"Photo Generation"},{"id":6,"name":"Music Generation"}]
  const categoryList = await getCategories()
  console.log("Category Data:");
  console.log(categoryList);
  
  return (
    
    <div style={{padding: "50px"}}>
    <CategoriesSection categoryList={categoryList} />
    </div>
  )
}



