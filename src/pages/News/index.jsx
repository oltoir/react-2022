import React from 'react';
import {Flex, Box, Text, Image} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {ChatIcon, AddIcon, RepeatClockIcon, ChevronUpIcon, ChevronDownIcon} from "@chakra-ui/icons";
import {useNews} from "store/B2B";

export const GlobalContext = React.createContext(null);

function NewsPage(){
    const {data: news} = useNews()

    return(
        <GlobalContext.Provider
            value={{ news }}
        >
        <div>{news?.map((item)=>(<Flex width={1000} alignItems='center' justifyContent='center' flexDirection='column' gap='2' margin='0 auto' marginBottom={20} marginTop={20} height='100%' bgColor='gray.100'>
            <Box bgColor='#fff' padding={10} borderRadius={20}>
                <Flex justifyContent='space-between' alignItems='center' width={1000}>
                    <Box><Text as='b'>{item.category}</Text> {item.timeAgo}</Box>
                    <Box color={'blue'}>Подписаться</Box>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'  flexDirection='column' width={1000}>
                    <Box><Text fontSize='30px'><Link to={`/news/${item.id}`}>{item.title}</Link></Text></Box>

                    <Box><Text fontSize='15px'>{item.description}</Text></Box>
                    <Box> <Image src={item.avatar} alt='Dan Abramov' /></Box>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center' width={1000}>
                    <Flex alignItems='center'><ChatIcon marginRight={2} />   57 <RepeatClockIcon marginLeft={5}/> <AddIcon marginLeft={5}/></Flex>
                    <Flex alignItems='center'><ChevronUpIcon/> 122 <ChevronDownIcon/></Flex>
                </Flex>
            </Box>
        </Flex>))}</div>
        </GlobalContext.Provider>

    )
}

export default NewsPage