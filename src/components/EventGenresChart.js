import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
  const colors = ["#023047", "#00C49F", "#FFBB28", "#FF8042", "#E493F6"];

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return { name: genre, value: filteredEvents.length };
    });
    return data;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#023047"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart
        margin={{
          top: 10,
          right: -40,
          bottom: 20,
          left: 10,
        }}
      >
        <Pie
          data={data}
          dataKey="value"
          fill="#023047"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
