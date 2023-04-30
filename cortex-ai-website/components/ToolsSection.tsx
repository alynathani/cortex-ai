"use client"
import {
    Container,
    Stack,
    Flex,
    Box,
    Link,
    Heading,
    Text,
    Button,
    CardHeader,
    SimpleGrid,
    Card,
    CardBody,
    Image,
    Center,
    Divider,
    ButtonGroup,
    CardFooter,
    textDecoration,

} from '@chakra-ui/react';

type toolProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    rating: number,
    downloads: number,
    imageLink: string
}

type ToolsSectionProps = {
    toolList: toolProps[],
    categoryName: string
}

export default function ToolsSection({ toolList, categoryName }: ToolsSectionProps) {
    return (
        <>
            <TitleSection categoryName={categoryName} toolList={toolList} />
            <ToolCardSection toolList={toolList} categoryName={categoryName} />
        </>
    )
}

function TitleSection({ categoryName }: ToolsSectionProps) {
    return (
        <Flex
            justifyContent={'center'}>
            <Text
                color={'white'}
                fontSize={{ base: '30px', lg: '50px' }}
                marginBottom={'40px'}
                textAlign={'center'}
                fontWeight={700}>
                {categoryName} Tools
            </Text>
            <Image src="../icons/settings.png"
                height={{ base: '40px', lg: '50px' }}
                marginLeft={{ base: '10px', lg: '20px' }}
                marginTop={{ base: '2px', lg: '15px' }}
            ></Image>
        </Flex>
    )
}

function ToolCardSection({ toolList }: ToolsSectionProps) {
    return (
        <>
            <SimpleGrid spacing={{ base: '50px', lg: '100px' }} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {toolList.map((tool) => (
                    <div key={tool.id}>
                        <ToolCard id={tool.id} name={tool.name} categoryName={tool.categoryName} description={tool.description} rating={tool.rating} downloads={tool.downloads} imageLink={tool.imageLink} />
                    </div>
                ))}
            </SimpleGrid>
        </>
    )
}

function ToolCard({ id, name, description, categoryName }: toolProps) {
    return (
        <Card
            rounded={'20px'}
            boxShadow={'lg'}
            color={'black'}
            bg={'white'}>
            <CardHeader>
                <Heading size='md'>{name}</Heading>
            </CardHeader>
            <CardBody
            >
                {description}
            </CardBody>
            <CardFooter>
                <Link href={`/tools/${categoryName}/${name}`}>
                    <Button>Guide<Image src="../icons/user-guide.png"
                        height={'50%'}
                        marginLeft={'10px'}
                    ></Image></Button>
                </Link>

            </CardFooter>
        </Card>
    )
}


