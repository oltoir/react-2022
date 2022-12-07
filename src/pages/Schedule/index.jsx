import {Box} from "@chakra-ui/react";
import {PageTitle} from "components/PageTitle/index";
import { ScheduleTable } from "pages/Schedule/libs/index";

function SchedulePage(){
    return(
        <Box p='32px'>
            <PageTitle title='Расписание'/>
            <ScheduleTable/>
        </Box>
    )
}

export default SchedulePage