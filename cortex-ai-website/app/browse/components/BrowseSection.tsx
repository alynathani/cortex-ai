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
interface CategoryProps {
    data: {
        id: number,
        name: string
    }[]
}


export default function BrowseSection({data}: CategoryProps){
    
    
    
    return (
        <>
            <TitleSection />
            
            
            <CategoryCardSection data={data} />

            
            
        </>
    )
}

function TitleSection() {
    return(
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
    )
   

}

function CategoryCardSection({data}: CategoryProps) {
    
    return (
        <>
        <SimpleGrid spacing={{base: '50px' ,lg: '100px'}} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
    
        {data.map((category) => (
            <div key={category.id}>
                <CategoryCard name = {category.name}/>
            </div>
                
            ))}
    
    
    

</SimpleGrid>
            
        </>
    )
}

interface Name{
    name: string
}


function CategoryCard({name}:Name) {
    
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



