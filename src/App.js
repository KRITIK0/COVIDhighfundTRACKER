// Components
import Navbar from "./components/Navbar";
import Banner from "./components/TopBanner";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Containers
import Stats from "./containers/Stats";

const colors = {
  brand: {
    primary: "#1C658C",
    secondary: "#398AB9",
    tertiary: "#D8D2CB",
    background: "#EEEEEE",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Banner />
      <Stats />
    </ChakraProvider>
  );
}

export default App;
