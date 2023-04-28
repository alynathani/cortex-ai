import { Button, Card, CardBody,Image, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import prisma from "../../../lib/prisma"
import ToolsSection from "../../../components/ToolsSection"
import { FC } from "react"

import React from 'react'
import { color } from "framer-motion"
import { log } from "console"

interface pageProps  {
    params: {category_name: string}
}

export const dynamic = 'force-dynamic'

type toolListProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    rating: number,
    downloads: number,
    imageLink: string
  }[]
  
interface dataProps{
    category_name: string,
}
  

async function getTools({category_name}: dataProps):Promise<toolListProps> {
    console.log("catname:");
    console.log(category_name);
    
    
    const res = await fetch(`${process.env.BASE_URL}/api/getTools/${category_name}`, { cache: 'no-store'})
    if (!res.ok) {
        console.log(res);
    }
    return res.json()
  }

  type titleName = {
    categoryName: string
}

export default async function Home({ params } : { params: { category_name: string }}) {
    const category_name = params.category_name
    console.log(params.category_name);
    const toolList = await getTools({category_name})
    const jsonList = JSON.stringify(toolList)
    console.log("Tool Data:");
    console.log(toolList);
    console.log(category_name);
    
  return (
    <div style={{padding: "50px"}}>
        <ToolsSection toolList={toolList} category_name={category_name} />
    </div>
  )
}



