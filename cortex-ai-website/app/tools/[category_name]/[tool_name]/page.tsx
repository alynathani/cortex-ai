import React from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type toolListProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    rating: number,
    downloads: number,
    imageLink: string
}

interface pageProps {
    toolName: string,
}

async function getTool({ toolName }: pageProps): Promise<toolListProps> {
    console.log(toolName);
    const res = await fetch(`${process.env.BASE_URL}/api/getTool/${toolName}`, { cache: 'no-cache' })
    if (!res.ok) {
        console.log(res);
    }
    return res.json()
}

export default async function Home({ params }: { params: { tool_name: string } }) {
    const toolName = params.tool_name.replace("%20", " ")
    console.log("page tool name:");
    console.log(toolName);
    
    

    const toolList = await getTool({ toolName })
    const jsonTest = JSON.stringify(toolList)
    console.log("Tool Page");

    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ color: "white" }}>{toolName}</h1>
            <h1 style={{ color: "white" }}>{jsonTest}</h1>
        </div>
    )
}