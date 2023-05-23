// Chakra imports
import {
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  List,
  ListItem,
  OrderedList,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import ChartStatistics from "./ChartStatistics";
import { PhoneIcon } from "@chakra-ui/icons";

const ActiveUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="16px">
      <CardBody>
        <Flex direction="column" w="100%">
          {chart}
          <Flex direction="column" mt="24px" mb="24px" alignSelf="flex-start">
            <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
              {title}
            </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }}>
            {/* <ChartStatistics
              title={"Disability"}
              amount={"32,984"}
              percentage={20}
              icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Dental"}
              amount={"23,232"}
              percentage={80}
              icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Vision"}
              amount={"2,400"}
              percentage={30}
              icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
             */}
            <TableContainer>
              <Table size="md">
                <Thead>
                  <Tr>
                    <Th>Agent</Th>
                    <Th>Frequency</Th>
                    <Th>Conversation Points</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">Segun</Td>
                    <Td>3</Td>
                    <Td>
                      <OrderedList>
                        <ListItem> Insurance Basis</ListItem>
                        <ListItem> Policy Details</ListItem>
                        <ListItem> Documention</ListItem>
                      </OrderedList>
                    </Td>
                    <Td>
                      <Button>
                        <PhoneIcon />
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
