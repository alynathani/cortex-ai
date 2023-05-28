"use client";

import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import {
  Box,
  Container,
  Link,
  Stack,
  Image,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ContactSection() {
  return (
    <>
      <Container height={"550"}>
        <Flex justifyContent={"center"}>
          <Text
            color={"white"}
            fontSize={{ base: "4xl", lg: "5xl" }}
            textAlign={"center"}
            mt={{ base: 12, lg: 10 }}
            fontWeight={"bold"}
          >
            Contact Us!
          </Text>
          
        </Flex>
        <Box>
            <Text color={"white"}mt={5}  textAlign={"center"} fontSize={'2xl'}>If you have any general queries or business enquiries please get in touch via email:</Text>
            <Text mt={5} color={"white"} fontSize={'2xl'} textAlign={"center"}>crtx.ai23@gmail.com</Text>
        </Box>

        
      </Container>
    </>
  );
}
