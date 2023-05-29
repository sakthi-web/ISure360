import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const DescriptionTable = () => {
  const dataHeadings = [
    "Product",
    "Illness",
    "Task Description",
    "Agent ID",
    "Agent Role",
    "Current Ranking",
    "History",
    "Agent Experience",
  ];

  const tableData = [{}];
  return (
    <TableContainer mt="5%">
      <Table variant="simple" size="sm" colorScheme="#ddd">
        <Thead>
          <Tr>
            {dataHeadings?.map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>CSR</Td>
            <Td display="flex" flexDirection="column">
              <Button size="sm" mb="5px">
                Refresh
              </Button>
              <Button size="sm">Refresh</Button>
            </Td>
            <Td>Count of Similar Ones Attended</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>ST</Td>
            <Td>Cancer</Td>
            <Td></Td>
            <Td>John</Td>
            <Td>Case Manager</Td>
            <Td display="flex" flexDirection="column">
              <Button size="sm">Refresh</Button>
            </Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>Paul</Td>
            <Td>Sivsakthi can provide this input</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DescriptionTable;
