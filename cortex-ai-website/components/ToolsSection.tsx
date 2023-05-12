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
import { useState } from 'react';

type toolProps = {
    id: number,
    name: string,
    categoryName: string,
    description: string,
    keyFeatures: string,
    useCases: string,
    guide: string,
    rating: number,
    externalLink: string,
    downloads: number,
    imageLink: string,
    videoLink: string
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
                        <ToolCard id={tool.id} name={tool.name} categoryName={tool.categoryName} description={tool.description} rating={tool.rating} downloads={tool.downloads} imageLink={tool.imageLink} keyFeatures={tool.keyFeatures} useCases={tool.useCases} guide={tool.guide} externalLink={tool.externalLink} videoLink={tool.videoLink} />
                    </div>
                ))}
            </SimpleGrid>
        </>
    )
}

function ToolCard({ id, name, description, categoryName, imageLink }: toolProps) {
    const [preview, setPreview] = useState(description.substring(0,100) + '...')
    const [showMore, setShowMore] = useState(false)
    
    function handleMoreClick() {
        console.log(description);
        if (showMore == false){
            setPreview(description)
        }
        else{
            setPreview((description.substring(0,100) + '...'))
        }
        
        setShowMore(!showMore)
        
      }

    return (
        <Card
            rounded={'20px'}
            boxShadow={'lg'}
            color={'black'}
            bg={'white'}>
            <CardHeader
            pb={0}>
                <Flex>
                <Heading size='md'>{name}</Heading>
                <Image src={imageLink}
                        height={'50px'}
                        
                        marginLeft={5}
                        paddingBottom={5}
                        

                        
                    ></Image>

                </Flex>
                
            </CardHeader>
            <CardBody
            py={0}
            >
                {preview}
                
                <Button
                size={'xs'}
                onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show More'}</Button>
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


