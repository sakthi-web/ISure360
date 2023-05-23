// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import { SupportIcon } from "components/Icons/Icons.js";
import React from "react";
import { timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import SalesOverview from "./components/SalesOverview";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const dataDesc = [
    {
      title: "Disability",
      amount: "$53,000",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD0ryBl2Y19QYBNOBhjYEsqzjNe-bIdKiF3r91dMvmA&usqp=CAU&ec=48665698",
      label: [
        {
          text: "Policy ID",
        },
        {
          text: "Last Interaction Date",
        },
      ],
    },
    {
      title: "Dental",
      amount: "$2,300",
      img:
        "https://www.metlife.com/content/dam/metlifecom/us/homepage/insurance/prod_big_dental-compressor.jpg",
      label: [
        {
          text: "Policy ID",
        },
        {
          text: "Last Interaction Date",
        },
        {
          text: "Vision",
          children: [{ text: "Policy ID" }, { text: "Last Interaction Date" }],
        },
      ],
    },
    {
      title: "Life",
      amount: "$3,020",
      img:
        "https://www.metlife.com/content/dam/metlifecom/us/homepage/insurance/prod_big_home.jpg",
      label: [
        {
          text: "Policy ID",
        },
        {
          text: "Last Interaction Date",
        },
      ],
    },
  ];

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing="24px">
        {dataDesc.map((item, i) => {
          return (
            <MiniStatistics
              title={item?.title}
              amount={item?.amount}
              img={item?.img}
              desc={item?.label}
              icon={<SupportIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
          );
        })}
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      ></Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      >
        <ActiveUsers
          title={"Last call Conversation Points"}
          percentage={23}
          chart={<BarChart />}
        />
        <OrdersOverview title={"Client Review"} data={timelineData} />
      </Grid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      ></Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1fr 1fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <SalesOverview
          title={"Calls Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
    </Flex>
  );
}
