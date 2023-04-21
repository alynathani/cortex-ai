
import Image from 'next/image'
import HeroSection from "@/components/HeroSection"
import { Inter } from 'next/font/google'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'

export const metadata = {
  title: 'Cortex AI - Home'
}

export default function Home() {
  return (
    
    <div>
    <HeroSection />
    </div>
  )
}

