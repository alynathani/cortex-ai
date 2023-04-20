"use client"
import { ChakraProvider, background, Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import { Children } from "react"
import { GetStaticProps } from "next"
import { Metadata } from "next"
import Head from "next/head"


export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <body>
        <ChakraProvider>
          <Navbar />
          <Box backgroundColor={'gray.800'}>
          {children}
          </Box>
        </ChakraProvider>

      </body>
    </html>
  )
}