
import Image from 'next/image'
import HeroSection from "@/components/HeroSection"
import HeroSectionV2 from "@/components/HeroSectionV2"
import { Inter } from 'next/font/google'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useState } from 'react';
import { useRouter } from 'next/router';


export default async function Home() {
  return (
    <>
    <HeroSection />
    </>
  )
}

