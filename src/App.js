import { ChakraProvider } from '@chakra-ui/react';
import {RootRouter} from "routes/index";
import AppTemplate from "templates/AppTemplate/index";
import {theme} from "themes/index";

function App() {
  return (
   <ChakraProvider theme={theme}>
       <AppTemplate>
           <RootRouter/>
       </AppTemplate>
   </ChakraProvider>
  );
}

export default App;
