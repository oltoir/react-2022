import { Text} from "@chakra-ui/react";

export function PageTitle({ title }){
    return(
        <Text fontSize='24px' lineHeight='32px' fontWeight='bold' color='gray.900'>
            {title}
        </Text>
    )
}