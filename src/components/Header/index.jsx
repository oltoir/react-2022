import {Box, Flex, Link, Text} from "@chakra-ui/react";

export function Header(){
    return(
        <Flex
            gap='32px'
            h='60px'
            alignItems='center'
            w='100%'
            backgroundColor='rgba( 88, 129, 255, 0.25 );'
            boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.37 );'
            backdropFilter='blur( 4px );'
            position='fixed'
            px='200px'
        >
            <Link href='/news'>
                <Text fontWeight='semibold'>Новости</Text>
            </Link>
            <Link href='/schedule'>
                <Text fontWeight='semibold'>Расписание</Text>
            </Link>
            <Link href='/account'>
                <Text fontWeight='semibold'>Мой аккаунт</Text>
            </Link>
        </Flex>
    )
}