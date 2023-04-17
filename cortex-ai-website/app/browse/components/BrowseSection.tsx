
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
import { color } from 'framer-motion';
import { Margarine } from 'next/font/google';



export default function BrowseSection() {
    return (
        <>
            <Flex
            justifyContent={'center'}>
            <Text
                color={'white'}
                fontSize={{ base: '30px', lg:'50px' }}
                marginBottom={'40px'}
                textAlign={'center'}
                fontWeight={700}>
                Tool Categories
                
            </Text>
            <Image src="./icons/folder.png"
              height={{base:'40px',  lg: '50px'}}
              marginLeft={{base: '10px' ,lg: '20px'}}
              marginTop={{base: '2px', lg: '15px'}}
              ></Image>

            </Flex>
            
            <CategoryCardSection />
            
        </>
    )
}

function CategoryCardSection() {
    return (
        <>
        <SimpleGrid spacing={{base: '50px' ,lg: '100px'}} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />

</SimpleGrid>
            
        </>
    )
}

function CategoryCard() {
    return (
        <Card
        rounded={'20px'}
        boxShadow={'lg'}
        color={'black'}
        
        bg={'white'}>
        <CardHeader>
            <Heading size='md'> Category Name</Heading>
        </CardHeader>
        <CardBody
        >
            Category Description
        </CardBody>
        <CardFooter>
            <Button>View Tools <Image src="./icons/settings.png"
              height={'50%'}
              marginLeft={'10px'}
              ></Image></Button>
        </CardFooter>
    </Card>
    )
}



