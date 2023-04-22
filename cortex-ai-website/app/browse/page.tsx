import BrowseSection from "./components/BrowseSection"

export const metadata = {
  title: 'Cortex AI - Browse'
}

type categoryListProps = {
  id: number,
  name: string
}[]

async function getCategories():Promise<categoryListProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`, { cache: 'no-store'})
  if (!res.ok) {
      console.log(res);
  }
  return res.json()
}


export default async function Home() {
  const categoryList = await getCategories()
  console.log("Category Data:");
  console.log(categoryList);
  
  return (
    
    <div style={{padding: "50px"}}>
    <BrowseSection categoryList={categoryList} />
    </div>
  )
}



