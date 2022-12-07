import {Box} from "@chakra-ui/react";
import {PageTitle} from "components/PageTitle/index";
import { ProfileCard} from "pages/Account/libs/ProfileCard/index";

function AccountPage(){
    return(
        <Box p='32px'>
            <PageTitle title='Мой аккаунт'/>
            <ProfileCard/>
        </Box>
    )
}

export default AccountPage