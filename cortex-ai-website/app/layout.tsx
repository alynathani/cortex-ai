"use client"
import { ChakraProvider, background, Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Children } from "react"
import { GetStaticProps } from "next"
import { Metadata } from "next"
import Head from "next/head"

export const dynamic = 'force-dynamic'

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <body style={{background: "#1A202C"}}>
        <ChakraProvider>
          <Navbar />
          <Box backgroundColor={'gray.800'}>
          {children}
          
          </Box>
          <Footer />
          
        </ChakraProvider>

      </body>
    </html>
  )
}