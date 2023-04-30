
import { Button, Card, CardBody, Image, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import prisma from "../../../../lib/prisma"
import { FC, cache } from "react"

import React from 'react'
import { color } from "framer-motion"
import { log } from "console"
import next from "next/types"

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

export default async function Home({ params }: { params: { toolName: string } }) {
    const toolName = params.toolName
    const toolList = await getTool({ toolName })
    const jsonTest = JSON.stringify(toolList)
    console.log("Tool Page");

    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ color: "white" }}>{jsonTest}</h1>
        </div>
    )
}