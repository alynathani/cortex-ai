
import Image from 'next/image'
import HeroSection from "@/components/HeroSection"
import HeroSectionV2 from "@/components/HeroSectionV2"
import { Inter } from 'next/font/google'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useState } from 'react';
import { useRouter } from 'next/router';
async function getTools() {
  const res = await fetch(`${`http://cortex-ai-git-developing-alynathani.vercel.app`}/api/getCategories`)
  return res.json();
  
}

export default async function Home() {
  const data: {
    id: number; name: string; category: string; description: string; rating: number; downloads: number; imageLink: string
  }[] = await getTools()

  console.log(data);
  
  
  return (
    
    <>
    <HeroSection />
    <h1>Hi</h1>
  
    {/*{data.map((tool) => (
      <h1 style={{color: "white"}} >{tool.name}</h1>
    ))}*/}
     
     
    </>
  )
}

