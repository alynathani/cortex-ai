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
} from '@chakra-ui/react';
import { Margarine } from 'next/font/google';

export default function HeroSection() {
  return (
    <Container maxW={'7xl'}
    padding={10}
    
    backgroundColor={'gray.700'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
          >
            <Slogan />
          </Heading>
          <Text color={'white'}
            fontWeight={{ base: '200', lg: '300' }}
            fontSize={{ base: '20px', md: '30px', lg: '35px' }}
            >
                Have a look at our AI Tool guides:
                
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
              <Link href='/categories'>
              <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={{ base: '900', lg: '700' }}
              variant={'solid'}
              px={10}
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
            <Button
              height={{ base: '50px' }}
              rounded={'full'}
              size={'lg'}
              colorScheme={'blue'}
              fontSize={'20px'}
              color={'black'}
              bg={'blue.200'}
              fontWeight={{ base: '600', lg: '600' }}
              px={6}
              _hover={{ bg: 'blue.500' }}>
              Cortex Rankings
              <Image src="./icons/ranking.png"
              height={'50%'}
              marginLeft={'10px'}></Image>
            </Button>
          </Stack>
        </Stack>
        
      </Stack>
    </Container>
  );
}

const Slogan = () => {
  return (
    <>
        <Text
          fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
          color={"white"}
          fontWeight={500}
        >
          Don't know where to start?
        </Text>
    </>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});