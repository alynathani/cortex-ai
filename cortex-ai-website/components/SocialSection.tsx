"use client"

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
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
export default function SocialSection() {
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
            Social Media
          </Text>
          <Image
            mt={12}
            ml={4}
            h={16}
            bg={"white"}
            p={2}
            rounded={"lg"}
            src="/icons/people.png"
          ></Image>
        </Flex>

        <Box>
          <Flex mt={10} justifyContent={"center"}>
            <Text
              color={"white"}
              fontSize={"4xl"}
              textAlign={"center"}
              fontWeight={"semibold"}
            >
              Instagram
            </Text>
            <Box bg={"white"} padding={1} rounded={"xl"} ml={5}>
              <Link href={"https://www.instagram.com/crtx.ai/"}>
                <FaInstagram size={50} />
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex mt={10} justifyContent={"center"}>
            <Text
              color={"white"}
              fontSize={"4xl"}
              textAlign={"center"}
              fontWeight={"semibold"}
            >
              TikTok
            </Text>
            <Box bg={"white"} padding={1} rounded={"xl"} ml={5}>
              <Link href={"https://www.tiktok.com/@crtx.ai"}>
                <FaTiktok size={50} />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
