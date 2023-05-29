// Chakra imports
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import PieRechartComponent from "components/Charts/PieChart";
import DescriptionTable from "components/Tables/DescriptionTable";
import { SearchIcon } from "@chakra-ui/icons";

function Tables() {
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");
  return (
    <>
      <Flex alignItems="center" pt={{ base: "120px", md: "75px" }} mt="1rem">
        {/* <PieRechartComponent /> */}
        <InputGroup
          cursor="pointer"
          bg={inputBg}
          borderRadius="15px"
          w={{
            sm: "128px",
            md: "200px",
          }}
          me={{ sm: "auto", md: "20px" }}
          ml="auto"
          _focus={{
            borderColor: { mainTeal },
          }}
          _active={{
            borderColor: { mainTeal },
          }}
        >
          <InputLeftElement
            children={
              <IconButton
                bg="inherit"
                borderRadius="inherit"
                _hover="none"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
              ></IconButton>
            }
          />
          <Input
            fontSize="xs"
            py="11px"
            color={mainText}
            placeholder="Search..."
            borderRadius="inherit"
          />
        </InputGroup>
        <ButtonGroup size="sm">
          <Button>Refresh Ranking</Button>
          <Button>Associate Agent Work</Button>
        </ButtonGroup>
      </Flex>
      <DescriptionTable />
    </>
  );
}

export default Tables;
