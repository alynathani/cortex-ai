import React from 'react'
import ToolGuideSection from '@/components/ToolGuideSection'


type toolListProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    keyFeatures: string,
    useCases: string,
    guide: string,
    rating: number,
    externalLink: string,
    downloads: number,
    imageLink: string,
    videoLink: string
}[]

interface pageProps {
    toolName: string,
}

async function getTool({ toolName }: pageProps): Promise<toolListProps> {
    const res = await fetch(`${process.env.BASE_URL}/api/getTool/${toolName}`)
    if (!res.ok) {
        console.log(res);
    }
    return res.json()
}

export default async function Home({ params }: { params: { tool_name: string } }) {
    const toolName = params.tool_name.replace("%20", " ")
    const toolList = await getTool({ toolName })

    
    const reformat = toolList[0]
    

    return (
        <div>
            <ToolGuideSection toolProps={reformat} />
        </div>
    )
}