import {Box, Image, Text} from "@chakra-ui/react";

export function AvatarAndName({name, avatar, data}){
    return(
        <Box>
            <Image src={avatar} alt={name} width='112px' height='112px' borderRadius='10px'/>
            <Text color='gray.900' mt='12px' textStyle='xl' fontWeightSemibold>{name}</Text>
            <Text color='gray.900' mt='12px' textStyle='sm' fontWeightSemibold>{data}</Text>
        </Box>
    )
}