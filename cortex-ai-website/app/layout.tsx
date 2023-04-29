"use client"
import { ChakraProvider, background, Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <body style={{ background: "#1A202C" }}>
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