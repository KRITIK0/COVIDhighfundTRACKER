import React from "react";
import { FaDisease } from "react-icons/fa";
import { Box, Text } from "@chakra-ui/react";

const index = () => {
  return (
    <Box bg="brand.background" p="1rem">
      <Text fontWeight="500" color="brand.primary" fontSize="1.2rem">
        <a href="#home">
          <FaDisease style={{ display: "inline", marginRight: "0.5rem" }} />
          Covid Tracker
        </a>
      </Text>
    </Box>
  );
};

export default index;
