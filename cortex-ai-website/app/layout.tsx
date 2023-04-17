"use client"
import { ChakraProvider, background, Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import { Children } from "react"
import { GetStaticProps } from "next"


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