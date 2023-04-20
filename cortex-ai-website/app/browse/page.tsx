

import Image from 'next/image'
import HeroSection from "@/components/HeroSection"
import HeroSectionV2 from "@/components/HeroSectionV2"
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
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
import Head from 'next/head'



export const metadata = {
  title: 'Cortex AI - Browse'
}

export default async function Home() {
  const data = await getCategories()
  console.log("page:");
  
  console.log(data);
  
  return (
    
    <div style={{padding: "50px"}}>
    <BrowseSection data={data}/>
   

    </div>
  )
}

interface Test{
  blah: string
}

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/getCategories", { cache: 'no-store'})
  if (!res.ok) {
      console.log(res);
  }
  return res.json()
  
}


