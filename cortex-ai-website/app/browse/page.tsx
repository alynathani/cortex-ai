"use client"

import BrowseSection from "./components/BrowseSection"
import { Inter } from 'next/font/google'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  flexbox,
  Center,
} from '@chakra-ui/react';
import { Margarine } from 'next/font/google';



export default function Home() {
  return (
    <>
    <Box
    padding={10}
    bg={'gray.900'}
    >
    <BrowseSection />

    </Box>
    
    

    
    
     
    </>
  )
}
