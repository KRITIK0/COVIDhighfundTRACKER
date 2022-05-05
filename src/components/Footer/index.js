import React from "react";
import { Flex, Box, Text, List, ListItem, Link } from "@chakra-ui/react";

const index = () => {
  return (
    <Flex w="100%" bg="#3A3845" color="white" p="1rem"  justifyContent="space-between">
      <Box p="1rem">
        <Text fontSize="20px" fontWeight="500" mb="1rem">Authors</Text>
        <List>
          <ListItem>
            <Text>Kritik Pandey</Text>
          </ListItem>
          <ListItem>
            <Text>Himanshu Jangid</Text>
          </ListItem>
          <ListItem>
            <Text>Elesh Tudu</Text>
          </ListItem>
          <ListItem>
            <Text>Vaibhav Raj</Text>
          </ListItem>
        </List>
      </Box>
      <Box p="1rem">
        <Text fontSize="20px" fontWeight="500" mb="1rem">Reference</Text>
        <List>
          <ListItem>
            <Text><Link href="https://www.covid19india.org/" target="_blank">https://www.covid19india.org/</Link></Text>
          </ListItem>
          <ListItem>
            <Text><Link href="https://disease.sh/"  target="_blank">https://disease.sh/</Link></Text>
          </ListItem>
        </List>
      </Box>
     <Box p="1rem">
        <Text fontSize="20px" fontWeight="500" mb="1rem">Information about vaccination and other covid-19 news</Text>
        <List>
          <ListItem>
            <Text><Link href="https://www.mygov.in/covid-19" target="_blank">https://www.mygov.in/covid-19</Link></Text>
          <ListItem>
            <Text><Link href="https://covid19.who.int/" target="_blank">https://covid19.who.int/</Link></Text>
          </ListItem>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default index;
