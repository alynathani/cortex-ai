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
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { Margarine } from 'next/font/google';
import { FaBox } from 'react-icons/fa';

export default function EveryoneSection() {
    return (
        <Container color={'white'} maxW={'7xl'} >
            <Heading>
                <Flex>
                <Image src="./icons/multiple-users-silhouette.png"
                        height={'50px'}
                        
                        mr={{base: 4, lg: 4}}
                        mt={{ base: -1, lg: '8px' }}
                        rounded={'lg'}
                        padding={2}

                        backgroundColor={'white'}
                    ></Image>

                    <Text
                        fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }}
                        color={"white"}
                        as={'span'}
                        position={'relative'}
                    >
                        AI For Everyone

                    </Text>
                    
                </Flex>
            </Heading>
            <Box marginBottom={7}>
                <MainParagraph />

            </Box>


        </Container>

    )
}

function MainParagraph() {
    return (
        <>



            <Box display={'flex'} flexWrap={'wrap'}>


                <Box width={{ base: 'full', lg: '800px' }}
                    paddingRight={{ base: 0, lg: '100px' }}
                    marginBottom={'40px'}>


                    <Text fontSize={'lg'} marginTop={6}>
                        Our vision is simple:</Text>
                    <Text fontSize={'2xl'} fontWeight={'semibold'}
                        backgroundColor={'gray.700'}
                        rounded={'2xl'}
                        padding={3}
                        shadow={'lg'}
                        marginTop={4}>Everyone should have equal access to AI technology.</Text>
                    <Text fontSize={'lg'}
                        mt={4}> Equal access to AI has to be a focus for the coming years, and we want to take responsibility for this. </Text>

                    <Flex>
                    <Text fontSize={'xl'} fontWeight={'bold'} marginTop={4} >
                        Increase Productivity</Text>
                        <Image src="./icons/trend.png"
                        height={{base:'40px'}}
                        ml={{ base: 2, lg: 2 }}
                        mt={{ base: 2, lg: 2 }}
                        rounded={'lg'}
                        padding={2}

                        
                    ></Image>

                    </Flex>
                    
                    <Text fontSize={'lg'} >
                        If you require a repetitive task to be completed, there is a good chance that AI can help you with that.
                    </Text>
                    <Flex>
                    <Text fontSize={'xl'} fontWeight={'bold'} marginTop={4} >
                        Easier to Learn New Skills</Text>
                        <Image src="./icons/light-bulb.png"
                        height={{base:'40px'}}
                        ml={{ base: 1, lg: 1 }}
                        mt={{ base: 2, lg: 2 }}
                        rounded={'lg'}
                        padding={2}

                        
                    ></Image>

                    </Flex>
                    
                    <Text fontSize={'lg'} >
                        Skills like graphic design, programming and even teaching have never been so easy to learn with the power of AI.
                    </Text>
                </Box>

                <Image src="./icons/thought.png"
                    backgroundColor={'white'}
                    padding={4}
                    height={'400px'}
                    rounded={'3xl'}
                    shadow={'xl'}
                    objectFit={'contain'}

                    mx={{ base: 'auto', md: 0, lg: 0 }}










                ></Image>
            </Box>
            <Link href='/categories'>
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={{ base: '900', lg: '700' }}
                    variant={'solid'}
                    px={10}
                    mt={{ base: '30px', md: 0, lg: 0 }}
                    bg={'green.200'}
                    colorScheme={'green'}
                    width={'full'}
                    height={{ base: '50px' }}
                    fontSize={'20px'}
                    color={'black'}
                    _hover={{ bg: 'green.500' }}>
                    Browse
                    <Image src="./icons/search.png"
                        height={'50%'}
                        marginLeft={'10px'}
                    ></Image>
                </Button>
            </Link>







        </>

    )

}