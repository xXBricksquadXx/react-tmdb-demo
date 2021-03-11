import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient()

function App() {
  return (
    <ChakraProvider>

      <QueryClientProvider client={queryClient}>
      <Home />;
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
