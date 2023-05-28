import { get } from "http"
import CategoriesSection from "@/components/CategoriesSection"
import { cache } from "react"

type categoryProps = {
  id: number,
  name: string,
  description: string
}[]

async function getCategories():Promise<categoryProps> {
  const res = await fetch(`${process.env.BASE_URL}/api/getCategories`, {cache:'no-store'})
  if (!res.ok) {
    console.log(res);
  }
return res.json()
}

export default async function Home() {
  const categoryList = await getCategories()

  return (

    <div style={{ padding: "50px" }}>
      {/*<CategoriesSection categoryList={categoryList}/>*/}
    </div>
  )
}