// Chakra imports
import {
  Flex,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import React from "react";

const MiniStatistics = ({ title, amount, desc, icon }) => {
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
    <Card minH="83px">
      <CardBody>
        <Flex flexDirection="row" justify="center" w="100%">
          <Stat me="auto">
            <StatLabel
              fontSize="sm"
              color="gray.400"
              fontWeight="bold"
              pb=".1rem"
            >
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="lg" color={textColor}>
                {amount}
              </StatNumber>
            </Flex>
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
          </Stat>
          <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
            {icon}
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
