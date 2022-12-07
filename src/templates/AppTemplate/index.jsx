import {Box} from "@chakra-ui/react";
import {Header} from "components/Header/index";

export default function AppTemplate({children}) {
    return(
        <>
            <Header/>
            <Box backgroundColor='gray.100' h='100vh' pt='60px' >
            {children}
            </Box>
        </>
    )
}