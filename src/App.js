import { ChakraProvider } from '@chakra-ui/react';
import {RootRouter} from "routes/index";

function App() {
  return (
   <ChakraProvider>
     <RootRouter/>
   </ChakraProvider>
  );
}

export default App;
