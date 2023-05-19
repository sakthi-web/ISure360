// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import PieRechartComponent from "components/Charts/PieChart";
function Tables() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <PieRechartComponent />
    </Flex>
  );
}

export default Tables;
