"use client"
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Link,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

type toolListProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    rating: number,
    downloads: number,
    imageLink: string
}

type ToolGuideSectionProps = {
    toolProps: toolListProps
}

export default function ToolGuideSection({toolProps}: ToolGuideSectionProps) {
    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                pt={{ base: 9, md: 12 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
                        }
                        fit={'cover'}
                        align={'center'}

                        h={{ base: '250px', sm: '300px', lg: '400px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                            color={'white'}>

                            {toolProps.name}
                        </Heading>

                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>

                            <Text fontSize={'lg'}
                                color={'white'}>
                                
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut d
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={'white'}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}
                                color={'white'}>
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
            <Box>
                <Link href='/categories'>
                    <Button
                        rounded={'full'}
                        size={'lg'}
                        fontWeight={{ base: '900', lg: '700' }}
                        variant={'solid'}

                        bg={'green.200'}
                        colorScheme={'green'}
                        width={'full'}
                        height={{ base: '50px' }}
                        fontSize={'20px'}
                        color={'blackAlpha'}
                        _hover={{ bg: 'green.500' }}
                        my={10}
                    >
                        Get Tool
                        <Image src="/icons/search.png"
                            height={'50%'}
                            marginLeft={'10px'}
                        ></Image>
                    </Button>
                </Link>
                <Text
                    fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}

                    color={'white'}
                    fontWeight={'500'}

                    mb={'4'}>
                    Tool Guide
                </Text>

                <Text fontSize={'lg'}
                    color={'white'}
                    mb={10}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam. - Tool Description
                </Text>
            </Box>
        </Container>
    );
}