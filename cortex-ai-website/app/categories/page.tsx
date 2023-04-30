import { get } from "http"
import CategoriesSection from "@/components/CategoriesSection"

export const metadata = {
  title: 'Cortex AI - Browse'
}

async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/api/getCategories`, { cache: 'no-store' })
  console.log("from getCategories:");
  const jsonData = await res.json()
  console.log(jsonData);

  if (!res.ok) {
    console.log(res);
  }
  return jsonData
}

export default async function Home() {
  const categoryList = await getCategories()
  console.log("Category Data:");
  console.log(categoryList);

  return (

    <div style={{ padding: "50px" }}>
      <CategoriesSection categoryList={categoryList} />
    </div>
  )
}