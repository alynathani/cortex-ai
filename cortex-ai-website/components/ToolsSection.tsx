"use client"
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    CardHeader,
    SimpleGrid,
    Card,
    CardBody,
    Image,
    Center,
    Divider,
    ButtonGroup,
    CardFooter,
    textDecoration,

} from '@chakra-ui/react';
import { log } from 'console';
import { Margarine } from 'next/font/google';

type toolProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    rating: number,
    downloads: number,
    imageLink: string
  }
  
  type toolListProps = {
    toolList: toolProps[],
    category_name: string
  }

type titleName = {
    category_name: string
}

interface dataProps{
    category_name: string,
}


export default function ToolsSection( {toolList, category_name} : toolListProps) {
    console.log("tools");
    console.log(category_name);
    
    
    return (
        <>
            <TitleSection category_name={category_name} />
            <ToolCardSection toolList={toolList} category_name={category_name} />
        </>
    )
}

function TitleSection({category_name} : dataProps)  {
   
    return (
        <Flex
            justifyContent={'center'}>
            <Text
                color={'white'}
                fontSize={{ base: '30px', lg: '50px' }}
                marginBottom={'40px'}
                textAlign={'center'}
                fontWeight={700}>
                {category_name} Tools
            </Text>
            <Image src="../icons/settings.png"
                height={{ base: '40px', lg: '50px' }}
                marginLeft={{ base: '10px', lg: '20px' }}
                marginTop={{ base: '2px', lg: '15px' }}
            ></Image>
        </Flex>
    )
  }
  
  function ToolCardSection({toolList}: toolListProps) {
    return (
        <>
            <SimpleGrid spacing={{ base: '50px', lg: '100px' }} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {toolList.map((tool) => (
                    <div key={tool.id}>
                        <ToolCard id ={tool.id} name={tool.name} categoryName={tool.categoryName} description={tool.description} rating={tool.rating} downloads={tool.downloads} imageLink={tool.imageLink}  />
                    </div>
                ))}
            </SimpleGrid>
        </>
    )
  }
  
  function ToolCard({id, name, description}: toolProps) {
    return (
        <Card
            rounded={'20px'}
            boxShadow={'lg'}
            color={'black'}
            bg={'white'}>
            <CardHeader>
                <Heading size='md'>{name}</Heading>
            </CardHeader>
            <CardBody
            >
                {description}
            </CardBody>
            <CardFooter>
                <Button>Guide<Image src="../icons/user-guide.png"
                    height={'50%'}
                    marginLeft={'10px'}
                ></Image></Button>
            </CardFooter>
        </Card>
    )
  }


