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
                        AI Tool Rankings

                    </Text>
                    <Image src="./icons/ranking.png"
                        height={'60px'}
                        ml={5}
                        
                        mr={{base: 4, lg: 0}}
                        mt={{ base: 8, lg: '50px' }}
                        rounded={'lg'}
                        padding={2}

                        
                    ></Image>
                    
                </Flex>
            <Box margin={10}>
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
                        <Th color={'white'} fontSize={'2xl'}>Ranking</Th>
                        <Th color={'white'} fontSize={'2xl'}>Tool</Th>
                        <Th color={'white'} fontSize={'2xl'} p={5}>Downloads</Th>
                        <Th color={'white'} fontSize={'2xl'} p={5}>Guide</Th>
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