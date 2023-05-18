"use client"

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Link,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    flexbox,
    Center,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Td,
    Tfoot,
    Th,
    Tr,
} from '@chakra-ui/react';

export default function RankingsSection() {
    return (
        <>
            <Flex justifyContent={'center'}>
                

                    <Text
                        fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }}
                        color={"white"}
                        fontWeight={'bold'}
                        
                        mt={10}
                        
                    >
                        Cortex Rankings

                    </Text>
                    
                    <Image src="./icons/ranking.png"
                        height={{base:'50px',lg:'60px'}}
                        ml={5}
                        
                        mr={{base: 4, lg: 0}}
                        
                        
                        mt={{ base: 8, lg: '50px' }}
                        rounded={'lg'}
                        p={{base: 1,lg:1}}

                        
                    ></Image>
                    
                </Flex>
                <Text color={'white'} textAlign={'center'}>
                        Updated weekly, rankings based on user ratings.
                    </Text>
            <Box backgroundColor={'gray.700'} padding={{base: 0, lg:'16'}} mx={{base:2,lg:'32'}} my={{base: 6,lg:20}} border={'1px'} borderColor={'white'} borderRadius={'3xl'}>
            <TableSection />

            </Box>
            
        </>

    )
}

function TableSection() {
    return (
        <TableContainer color={'white'}>
            <Table variant='simple'>
                <TableCaption color={'white'}>Top 50 AI Tools</TableCaption>
                <Thead >
                    <Tr>
                        <Th color={'white'} fontSize={{base:'1xl',lg:'2xl'}}>Ranking</Th>
                        <Th color={'white'} fontSize={{base:'1xl',lg:'2xl'}}>Tool</Th>
                        <Th color={'white'} fontSize={{base:'1xl',lg:'2xl'}} p={5}>Downloads</Th>
                        <Th color={'white'} fontSize={{base:'1xl',lg:'2xl'}} p={5}>Guide</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    <Tr>
                        <Td >#1</Td>
                        <Td>AI Tool</Td>
                        <Td>1000</Td>
                        <Td>guide</Td>
                    </Tr>
                    <Tr>
                        <Td>#2</Td>
                        <Td>AI Tool</Td>
                        <Td>1000</Td>
                        <Td>guide</Td>
                    </Tr>
                    <Tr>
                        <Td>#3</Td>
                        <Td>AI Tool</Td>
                        <Td>1000</Td>
                        <Td>guide</Td>
                    </Tr>
                </Tbody>
                
            </Table>
        </TableContainer>)
}