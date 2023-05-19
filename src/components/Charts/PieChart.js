import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Line } from "recharts";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { isConstructorDeclaration } from "typescript";
function PieRechartComponent() {
  const colors = ["#8884d8", "#FF8042", "#82ca9d", "#FFBB28"];
  const pieData = [
    {
      name: "Dental",
      value: 50.0,
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
      name: "Disability",
      value: 50.0,
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
      name: " ",
      value: 50.0,
      label: [],
    },
    {
      name: "Life",
      value: 50.0,
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

  const mapData = (item) => {
    return item.map((item, i) => {
      return (
        <UnorderedList key={i}>
          <ListItem>{`${item.text}`}</ListItem>
        </UnorderedList>
      );
    });
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return payload[0].payload?.label?.length > 0 ? (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          {payload[0].payload?.label?.map((item, i) => {
            return (
              <UnorderedList key={i}>
                <ListItem>
                  {`${item.text}`}
                  {item?.children?.length > 0 && mapData(item.children)}
                </ListItem>
              </UnorderedList>
            );
          })}
        </div>
      ) : (
        ""
      );
    }
    return null;
  };

  return (
    <PieChart width={730} height={300}>
      <Pie
        data={pieData}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  );
}
export default PieRechartComponent;
