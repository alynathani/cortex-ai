"use client"
import { Button, Card, CardBody,Image, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import ToolsSection from "../../../components/ToolsSection"
import { FC } from "react"

import React from 'react'

interface pageProps  {
    params: {category_name: string}
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <>
    <div style={{padding: "50px"}}>
    <TitleSection params={params} />
    </div>
    </>
  )
}

export default page

const TitleSection: FC<pageProps> = ({ params }) => {
  let formattedName:string = params.category_name.replace("%20", " ")
  return (
      <Flex
          justifyContent={'center'}>
          <Text
              color={'white'}
              fontSize={{ base: '30px', lg: '50px' }}
              marginBottom={'40px'}
              textAlign={'center'}
              fontWeight={700}>
              {formattedName} Tools
          </Text>
          <Image src="../icons/settings.png"
              height={{ base: '40px', lg: '50px' }}
              marginLeft={{ base: '10px', lg: '20px' }}
              marginTop={{ base: '2px', lg: '15px' }}
          ></Image>
      </Flex>
  )
}

function ToolCardSection() {
  return (
      <>
          <SimpleGrid spacing={{ base: '50px', lg: '100px' }} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
              <ToolCard />
          </SimpleGrid>
      </>
  )
}

function ToolCard() {
  return (
      <Card
          rounded={'20px'}
          boxShadow={'lg'}
          color={'black'}
          bg={'white'}>
          <CardHeader>
              <Heading size='md'>Tool Name</Heading>
          </CardHeader>
          <CardBody
          >
              Tool Description
          </CardBody>
          <CardFooter>
              <Button>Guide<Image src="./icons/settings.png"
                  height={'50%'}
                  marginLeft={'10px'}
              ></Image></Button>
          </CardFooter>
      </Card>
  )
}