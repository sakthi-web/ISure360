// Chakra imports
import {
  Flex,
  Image,
  Stack,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  UnorderedList,
  useColorModeValue,
  Heading,
  CardFooter,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";

const MiniStatistics = ({ title, amount, img, desc, icon }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  const mapData = (item) => {
    return item?.map((item, i) => {
      return (
        <UnorderedList key={i}>
          <ListItem>{`${item.text}`}</ListItem>
        </UnorderedList>
      );
    });
  };

  return (
    <Card maxW="sm" maxH="400px">
      <Image
        src={img}
        alt={title}
        borderRadius="lg"
        minH="200px"
        objectFit="cover"
        objectPosition="center"
      />
      <CardBody overflow="hidden">
        <Flex flexDirection="column" w="100%">
          <Stack
            mt="6"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#ddd",
                borderRadius: "24px",
              },
            }}
          >
            <Heading size="md">{title}</Heading>
            <Text color="blue.600" fontSize="lg">
              {amount}
            </Text>
            <Flex flexDirection="column">
              {desc?.map((item, i) => {
                return (
                  <UnorderedList key={i}>
                    <ListItem>
                      {`${item.text}`}
                      {item?.children?.length > 0 && mapData(item?.children)}
                    </ListItem>
                  </UnorderedList>
                );
              })}
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
