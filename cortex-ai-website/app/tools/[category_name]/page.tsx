
import { Button, Card, CardBody,Image, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import prisma from "../../../lib/prisma"
import ToolsSection from "../../../components/ToolsSection"
import { FC, cache } from "react"

import React from 'react'

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
  imageLink: string
}[]
  
interface dataProps{
    category_name: string,
}

async function getTools({category_name}: dataProps):Promise<toolListProps> {

    
    
    const res = await fetch(`${process.env.BASE_URL}/api/getTools/${category_name}`, {cache:'no-store'})
    if (!res.ok) {
        console.log(res);
    }
    return res.json()
  }

export default async function Home({ params } : { params: { category_name: string }}) {
    const category_name = params.category_name
    const toolList = await getTools({category_name})
    const jsonList = JSON.stringify(toolList)
  return (
    <div style={{padding: "50px"}}>
        <ToolsSection toolList={toolList} categoryName={category_name} />
    </div>
  )
}



