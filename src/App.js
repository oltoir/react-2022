import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {RootRouter} from "routes/index";
import AppTemplate from "templates/AppTemplate/index";
import {theme} from "themes/index";

const queryClient = new QueryClient({

});



function App() {
    return (
      <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
           <AppTemplate>
               <RootRouter/>
           </AppTemplate>
          </ChakraProvider>
      </QueryClientProvider>
  );
}

export default App;
