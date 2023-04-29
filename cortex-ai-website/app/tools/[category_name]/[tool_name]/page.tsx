
import { Button, Card, CardBody,Image, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import prisma from "../../../../lib/prisma"
import { FC, cache } from "react"

import React from 'react'
import { color } from "framer-motion"
import { log } from "console"
import next from "next/types"

interface pageProps  {
    params: {tool_name: string}
}

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
  
interface dataProps{
    tool_name: string,
}

async function getTool({tool_name}: dataProps):Promise<toolListProps> {
    console.log("catname:");
    console.log(tool_name);
    
    
    const res = await fetch(`${process.env.BASE_URL}/api/getTool/${tool_name}`, { cache: 'no-cache'})
    if (!res.ok) {
        console.log(res);
    }
    return res.json()
  }



export default async function Home({ params } : { params: { tool_name: string }}) {
    const tool_name = params.tool_name
    
    console.log(params.tool_name);
    const toolList = await getTool({tool_name})
    const jsonList = JSON.stringify(toolList)
    console.log("Tool Data:");
    console.log(toolList);
    console.log(tool_name);
    
  return (
    <div style={{padding: "50px"}}>
        <h1 style={{color:"white"}}>{jsonList}</h1>
    </div>
  )
}



