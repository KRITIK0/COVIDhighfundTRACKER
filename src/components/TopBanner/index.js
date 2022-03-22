import React from "react";
import { Box, Text } from "@chakra-ui/react";

const index = () => {
  return (
    <Box
      height="150px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="brand.tertiary"
    >
      <Box fontWeight="400" fontSize="18px" textAlign="center">
        A{" "}
        <Text as="span" color="red.500">
          Covid19
        </Text>{" "}
        Dashboard to track its pandemic effects across the globe.
      </Box>
    </Box>
  );
};

export default index;
