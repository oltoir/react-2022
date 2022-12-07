import {Box, Center, Flex, Text} from "@chakra-ui/react";

export function ScheduleTable(){
    const times=['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']

    return(
        <Flex borderRadius='10px' border='1px solid' borderColor='gray.200' p='16px'>
            <Flex gap='16px'  flexDir='column' mt='32px'>
                {times.map((time,index)=>(
                        <Text key={index} color='gray.600' textStyle='sm'>{time}</Text>
                ))}
            </Flex>
            <Flex flexDir='column' ml='32px' border='1px solid' borderColor='gray.200' borderTop='none' borderBottom='none'>
                <Text color='gray.600' textStyle='xl' px='12px'>Понедельник</Text>
                <Box mt='12px'>
                {times.slice(1).map((time,index)=>(
                    <Center key='index' border='1px solid' borderColor='gray.200' borderRight='none' borderLeft='none' h='36px'
                        backgroundColor={time==='12:00' && 'gray.200'}
                    >
                        {time==='12:00' && 'История'}
                    </Center>
                ))}
                </Box>
            </Flex>

            <Flex flexDir='column' ml='32px' border='1px solid' borderColor='gray.200' borderTop='none' borderBottom='none'>
                <Text color='gray.600' textStyle='xl' px='12px'>Вторник</Text>
                <Box mt='12px'>
                    {times.slice(1).map((time,index)=>(
                        <Center key='index' border='1px solid' borderColor='gray.200' borderRight='none' borderLeft='none' h='36px'
                                backgroundColor={(time==='17:00' || time==='16:00') && 'gray.200'}
                        >
                            {time==='17:00' && 'BIS'}
                            {time==='16:00' && 'React'}
                        </Center>
                    ))}
                </Box>
            </Flex>
            <Flex flexDir='column' ml='32px' border='1px solid' borderColor='gray.200' borderTop='none' borderBottom='none'>
                <Text color='gray.600' textStyle='xl' px='12px'>Четверг</Text>
                <Box mt='12px'>
                    {times.slice(1).map((time,index)=>(
                        <Center key='index' border='1px solid' borderColor='gray.200' borderRight='none' borderLeft='none' h='36px'
                                backgroundColor={time==='15:00' && 'gray.200'}
                        >
                            {time==='15:00' && 'Web Programming'}
                        </Center>
                    ))}
                </Box>
            </Flex>
            <Flex flexDir='column' ml='32px' border='1px solid' borderColor='gray.200' borderTop='none' borderBottom='none'>
                <Text color='gray.600' textStyle='xl' px='12px'>Суббота</Text>
                <Box mt='12px'>
                    {times.slice(1).map((time,index)=>(
                        <Center key='index' border='1px solid' borderColor='gray.200' borderRight='none' borderLeft='none' h='36px'
                                backgroundColor={time==='19:00' && 'gray.200'}
                        >
                            {time==='19:00' && 'Философия'}
                        </Center>
                    ))}
                </Box>
            </Flex>
        </Flex>
    )
}