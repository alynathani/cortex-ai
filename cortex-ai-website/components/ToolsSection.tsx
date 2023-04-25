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

export default function ToolsSection() {
    return (
        <>
            <TitleSection />
            <ToolCardSection />
        </>
    )
}

function TitleSection() {
    return (
        <Flex
            justifyContent={'center'}>
            <Text
                color={'white'}
                fontSize={{ base: '30px', lg: '50px' }}
                marginBottom={'40px'}
                textAlign={'center'}
                fontWeight={700}>
                Tools
            </Text>
            <Image src="./icons/folder.png"
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



