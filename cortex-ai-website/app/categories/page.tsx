import { get } from "http"
import CategoriesSection from "@/components/CategoriesSection"
import { cache } from "react"

export const metadata = {
  title: 'Cortex AI - Browse'
}

async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/api/getCategories`, { cache:'force-cache'})
  const jsonData = await res.json()

  if (!res.ok) {
    console.log(res);
  }
  return jsonData
}

export default async function Home() {
  const categoryList = await getCategories()

  return (

    <div style={{ padding: "50px" }}>
      <CategoriesSection categoryList={categoryList} />
    </div>
  )
}