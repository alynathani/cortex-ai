"use client"

import Image from 'next/image'
import HeroSection from "@/components/HeroSection"
import HeroSectionV2 from "@/components/HeroSectionV2"
import { Inter } from 'next/font/google'
async function index() {
  const res = await fetch("api/index")
}

export default function Home() {
  return (
    <>
     <HeroSection />
    </>
  )
}
