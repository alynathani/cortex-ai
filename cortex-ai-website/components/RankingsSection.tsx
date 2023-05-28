"use client"

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  flexbox,
  Center,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { log } from "console";

type toolProps = {
  id: number;
  name: string;
  categoryName: string;
  description: string;
  keyFeatures: string;
  useCases: string;
  guide: string;
  rating: number;
  externalLink: string;
  downloads: number;
  imageLink: string;
  videoLink: string;
}

type RankingsSectionTypes = {
  toolArray: toolProps[]
};

export default function RankingsSection({ toolArray }: RankingsSectionTypes) {
  const downloadsDescend = toolArray.sort((a, b) => b.downloads - a.downloads);
  console.log(toolArray);

  return (
    <>
      <Flex justifyContent={"center"}>
        <Text
          fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
          color={"white"}
          fontWeight={"bold"}
          mt={10}
        >
          Cortex Rankings
        </Text>

        <Image
          src="./icons/ranking.png"
          height={{ base: "50px", lg: "60px" }}
          ml={5}
          mr={{ base: 4, lg: 0 }}
          mt={{ base: 8, lg: "50px" }}
          rounded={"lg"}
          p={{ base: 1, lg: 1 }}
        ></Image>
      </Flex>
      <Text color={"white"} textAlign={"center"}>
        Updated weekly, rankings based on user ratings.
      </Text>
      <Box
        backgroundColor={"gray.700"}
        padding={{ base: 0, lg: "16" }}
        mx={{ base: 2, lg: "32" }}
        my={{ base: 6, lg: 20 }}
        border={"1px"}
        borderColor={"white"}
        borderRadius={"3xl"}
      >
        <TableSection toolArray={downloadsDescend} />
      </Box>
    </>
  );
}

function TableSection({ toolArray }: RankingsSectionTypes) {
  return (
    <TableContainer color={"white"}>
      <Table variant="simple">
        <TableCaption color={"white"}>Top 50 AI Tools</TableCaption>
        <Thead>
          <Tr>
            <Th color={"white"} fontSize={{ base: "1xl", lg: "2xl" }}>
              Ranking
            </Th>
            <Th color={"white"} fontSize={{ base: "1xl", lg: "2xl" }}>
              Tool
            </Th>
            <Th color={"white"} fontSize={{ base: "1xl", lg: "2xl" }} p={5}>
              Downloads
            </Th>
            <Th color={"white"} fontSize={{ base: "1xl", lg: "2xl" }} p={5}>
              Guide
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {toolArray.map((tool, index) => (
            <Tr key={tool.id}>
              <Td>#{index + 1}</Td>
              <Td>
                <Flex display={"table-row"}>
                  <Text mt={4}>{tool.name}</Text>

                  <Image
                    height={"50px"}
                    rounded={"lg"}
                    mt={5}
                    p={2}
                    bgColor={"white"}
                    src={`${tool.imageLink}`}
                  ></Image>
                </Flex>
              </Td>
              <Td>{tool.downloads}</Td>
              <Td>
                <Link
                  color={"green.200"}
                  fontWeight={"bold"}
                  href={`/tools/${tool.categoryName}/${tool.name}`}
                >
                  Guide
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
