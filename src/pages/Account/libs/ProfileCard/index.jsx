import {Button, Flex} from "@chakra-ui/react";
import {AvatarAndName} from "pages/Account/libs/ProfileCard/libs/AvatarAndName";

export function ProfileCard(){
    return(
        <Flex border='1px solid' borderColor='gray.200' borderRadius='10px' w='100%' p='16px' backgroundColor='white'
        justifyContent='space-between'
        >
            <AvatarAndName name='Altair'
                           avatar='https://leonardo.osnova.io/6546c668-de90-50de-b56e-a65ae9e7bbba/-/format/webp/'
            data='ФИТ, 3 курс, 20B030308'
            />
            <Flex gap='12px'>
            <Button variant='secondary'>Настройки</Button>
            <Button>Написать</Button>
            </Flex>
        </Flex>
    )
}