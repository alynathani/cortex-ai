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
    Wrap,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    OrderedList,
    Divider,
    WrapItem,
} from '@chakra-ui/react';
import { log } from 'console';
import { wrap } from 'module';
import { features } from 'process';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

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
    imageLink: string,
    videoLink: string
}

type ToolGuideSectionProps = {
    toolProps: toolListProps,
}


export default function ToolGuideSection({ toolProps }: ToolGuideSectionProps) {

    let featuresArray: string[] = JSON.parse(toolProps.keyFeatures)

    let guideArray: string[] = JSON.parse(toolProps.guide)

    console.log(toolProps.videoLink);


    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                pt={{ base: 9, md: 12 }}>
                <Flex>
                    <Box color={'white'}
                        margin={'auto'}>
                        <Image
                            backgroundColor={'white'}
                            rounded={'md'}
                            alt={'product image'}
                            src={
                                toolProps.imageLink
                            }
                            padding={{ base: 5, lg: 5 }}
                            height={'300px'}
                        />
                    </Box>
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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

                                {toolProps.description}
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '18px', lg: '20px' }}
                                color={'white'}
                                fontWeight={'700'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1 }} spacing={10}
                                color={'white'}>
                                <List spacing={2}>
                                    {featuresArray.map((feature) => (
                                        <ListItem key={feature}>{feature}
                                        </ListItem>
                                    ))}



                                </List>

                            </SimpleGrid>
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
            <Box>
                <Link href={toolProps.externalLink}>
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
                <Divider borderColor={useColorModeValue('gray.200', 'gray.600')}
                />




            </Box>
            

            
            <Flex padding={{base:0, lg:10}}  flexWrap={'wrap'}>
            

            
                    
                <OrderedList spacing={2}
                flex={1}

                    color={'white'}
                    fontSize={'lg'}
                    paddingRight={10}
                    paddingTop={5}
                    
                    
                    marginRight={{base:0,lg:10}}
                    
                    
                >
                    {guideArray.map((feature) => (
                        <ListItem key={feature}>{feature}
                        </ListItem>
                    ))}
                    
                </OrderedList>
                
                    

                

                <Wrap>
                <Box py={5} mx={10}

                
            
                >
                <iframe
                    width="500"
                    height="300"
                    src={`https://www.youtube.com/embed/${toolProps.videoLink}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    
                />
                </Box>
                </Wrap>
                
                
                
                
            </Flex>
            


        </Container>
    );
}